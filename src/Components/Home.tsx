import React,{useState,useEffect,useContext} from 'react'
import Login from './Login'
import  {AppContext} from '../contexts/AppContext'
import {DeviceModelType} from '../models/device.model'
import AddNewModel from './AddNewModel';
import Layout from './Layout'
import {Button} from 'react-bootstrap';
import DeviceModelList from './DeviceModelList'
const Home = ()=>{

    const {user,accessToken} = useContext(AppContext);

   
    const[addModalShow,setAddModalShow] = useState(false);


    useEffect(()=>{


    },[])

    // hide add modal
    const hideAddModal = ()=>{

        setAddModalShow(false)
    }
  // add model handler 

  const addModelHandler = ()=>{

    setAddModalShow(true)
  }

    return (<div >

        {  !accessToken ? 
        
        <Login/> : 
        
            <Layout>
                        <div className="container" >
        <h3 style={{textAlign:"center"}} >Availabe Medical Devices</h3>
         <div  style={{textAlign:"right"}}>
         <Button style={{  
             backgroundColor: "#04AA6D",
             borderColor : "#04AA6D",
                     
                        }}
         onClick={addModelHandler}
        >Add New Model</Button>
         </div>
        <DeviceModelList reload={addModalShow} />
        <AddNewModel show ={addModalShow} handleClose ={hideAddModal} />

        </div>
            </Layout>
        }
        
    </div>)

}

export default Home;