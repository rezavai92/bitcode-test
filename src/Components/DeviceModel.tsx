import React,{useState,useContext} from 'react'
import {DeviceModelType,DeviceModelDataType} from '../models/device.model'
import {AppContext} from '../contexts/AppContext'
import axios from 'axios'
import OverviewModal from './OverviewModal'
interface Props{

    deviceModel : DeviceModelType ;
    showDetails  : (payload : DeviceModelDataType[] )=>void; 
}


const DeviceModel = (props:Props)=>{

    const { deviceModel,showDetails} = props;
    const {accessToken} = useContext(AppContext)

    const [model,setModel] = useState <DeviceModelType> (deviceModel);
    const clickHandler =async (brand:string,model:string)=>{

      try{
       const response=  await axios.get(`http://163.47.115.230:30000/api/overview/modeldata/${brand}/${model}`,{
         headers:{
           authorization : accessToken
         }
       } )
     
       showDetails(response.data);
     }
      catch(error){
   
          throw error;
      }
   }

 return(

      <tr onClick={()=>{clickHandler(model.BrandId,model.Name)}} >
          <td>
              {model.Id}
          </td>
          <td>
                {model.BrandId}
          </td>
          <td>
            {model.Name}
          </td>
          <td>
            {model.TypeId}
          </td>
          <td>
            {model.Comment}
          </td>
          <td>
            {model.Description}
          </td>

      </tr>
 )

}

export default DeviceModel;