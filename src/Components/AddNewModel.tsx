import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../contexts/AppContext'
import axios from 'axios'
import {Modal,Button ,Form}from 'react-bootstrap'
import {DeviceType} from '../models/device.model'

interface Props {

    show : boolean,
    handleClose :()=>void,
}
const AddModal = (props:Props)=>{

    const [deviceTypes,setDeviceTypes] = useState <DeviceType[]> ();
    const [selectedDeviceType,setSelectedDeviceType] = useState <number>();
    const [brandId, setBrandId] = useState<string>("");
    const [modelName,setModelName] = useState<string>("");
    const [comment,setComment] = useState<string>("");
    const [submitResult,setSubmitResult] = useState<string>("");
    const [showSubmitResult,setShowSubmitResult] = useState<boolean>(false)
    console.log(deviceTypes)
    const {accessToken} = useContext(AppContext)
    const handleInputChange = (type: string,e:React.ChangeEvent<HTMLInputElement>)=>{

        if(type=="brandId"){
            setBrandId(e.target.value);
        }
        else if (type=="modelName"){
            setModelName(e.target.value);
        }
        else if (type=="comment"){
            setComment(e.target.value)
        }

    }
 useEffect(()=>{

    async function loadDeviceTypes(){
        try{
               const response = await axios.get("http://163.47.115.230:30000/api/devicetype?limit=40&page=1",{
                   headers:{
                       authorization :accessToken
                   }
               });

               setDeviceTypes(response.data[0])
               
        }
        catch(error){
            throw error;
        }

    }
    loadDeviceTypes();
    

 },[])   

 // form submit handler

 const formSubmitHandler =async(e : React.ChangeEvent<HTMLFormElement> )=>{

    e.preventDefault()
    setShowSubmitResult(true)
    try{
      const response = await axios.post("http://163.47.115.230:30000/api/devicemodel",{
        BrandId : brandId,
        Comment : comment,
        Name : modelName,
        TypeId : selectedDeviceType

      },{
          headers:{
              authorization : accessToken
          }
      });
      setSubmitResult("Ne Item has been saved successfully")
      setBrandId("")
      setModelName("")
      setComment("")
      
    }
    catch(err){
        setSubmitResult("Failed to save the item!");
        throw err;
    }

 }
 const {show,handleClose} = props;
    return(<div>

            <Modal size="lg" show={show} 
                onHide={ ()=>{ 
                    handleClose();
                    setTimeout(()=>{
                        setSubmitResult("");
                        setShowSubmitResult(false) 
                    },1000)
                
                } }>
                    <Modal.Header closeButton style={{  backgroundColor: "#04AA6D",
                        color: "white"}} >
                    <Modal.Title>
                        Add New Model
                    
                    </Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        {showSubmitResult && <div>
                                {submitResult}
                            </div>}
                   {showSubmitResult ? null : 
                      <Form onSubmit={formSubmitHandler} >
                      <Form.Label>Device Type : { " "} </Form.Label>
                  <select required={true} onChange={(e)=>{setSelectedDeviceType(Number(e.target.value))}} >
                      <option>Select Device Type</option>
                      {
                          deviceTypes?.map((type)=>{return(<option key={type.Id} value={type.Id} >
                              
                              {type.Description}
                          </option>)})
                      }
                  </select>
                  <Form.Group >
                      <Form.Label>Brand Id </Form.Label>
                      <Form.Control type="text" placeholder="Brand Id" value={brandId} 
                      required={true}
                      onChange ={(e : React.ChangeEvent<HTMLInputElement> )=>{handleInputChange("brandId",e)}}
                      />
                     
                  </Form.Group>
                  <Form.Group >
                      <Form.Label>Model Name </Form.Label>
                      <Form.Control type="text" placeholder="Model Name"
                      required={true}
                      value ={modelName}
                      onChange ={(e : React.ChangeEvent<HTMLInputElement> )=>{handleInputChange("modelName",e)}}
                      />
                     
                  </Form.Group>
                  <Form.Group >
                      <Form.Label>Comment </Form.Label>
                      <Form.Control type="text" placeholder="Comment" value ={comment}
                      onChange ={(e : React.ChangeEvent<HTMLInputElement> )=>{handleInputChange("comment",e)}}    
                      />
                     
                  </Form.Group>

                      
                      <Button type="submit" style={{backgroundColor: "#04AA6D"}} >Add</Button>
                  </Form>
                     
                   }
                    </Modal.Body>
                    <Modal.Footer>
                        {showSubmitResult && <Button onClick={()=>{
                            setSubmitResult("")
                            setShowSubmitResult(false)}} >
                            Add New Model</Button>}
                    <Button variant="secondary" onClick={ ()=>{ 
                        handleClose();
                        setTimeout(()=>{
                            setSubmitResult("");
                            setShowSubmitResult(false) 
                        },1000)
                    }}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
             </Modal>
    </div>)

}

export default AddModal