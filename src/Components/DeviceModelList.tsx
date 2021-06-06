import React, { useState, useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { DeviceModelType, DeviceModelDataType } from '../models/device.model'
import DeviceModel from './DeviceModel'
import AddNewModel from './AddNewModel'
import { AppContext } from '../contexts/AppContext'
import axios from 'axios'
import './deviceModels.css'
import OverviewModal from './OverviewModal'

interface Props {
    reload: boolean
}
const DeviceModelList = (props: Props) => {


    const [deviceModels, setDeviceModels] = useState<DeviceModelType[]>();
    const [selectedDeviceModelData, setSelectedDeviceModelData] = useState<DeviceModelDataType[]>();
    const { accessToken } = useContext(AppContext);

    const [overviewModalShow, setOverviewModalShow] = useState(false);


    useEffect(() => {

        async function getDeviceModels() {
            try {
                const response = await axios.get('http://163.47.115.230:30000/api/overview/modeltype', {
                    headers: {
                        authorization: accessToken,
                        type: "text",
                    }
                });

                setDeviceModels(response.data);
            }
            catch (error) {

                throw error;
            }

        }

        getDeviceModels()

    }, [props.reload])

    const showDetails = (deviceModelData: DeviceModelDataType[]) => {
        setOverviewModalShow(true);
        setSelectedDeviceModelData(deviceModelData);


    }



    // hides the overview modal 
    const hideOverviewModal = () => {

        setOverviewModalShow(false)
    }
    return (<div>


        {
            <table className="device-table" >
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        BrandId
                    </th>
                    <th>
                        TypeId
                    </th>
                    <th>
                        Comment
                    </th>
                    <th>
                        Description
                    </th>
                </tr>
                {
                    deviceModels?.map((item: DeviceModelType) => {

                        return (<DeviceModel
                            key={item.Id}
                            deviceModel={

                                {
                                    Id: item.Id,
                                    Name: item.Name,
                                    BrandId: item.BrandId,
                                    TypeId: item.TypeId,
                                    Comment: item.Comment,
                                    Description: item.Description,

                                }
                            }
                            showDetails={showDetails}
                        />)
                    })
                }
            </table>
        }



        <OverviewModal show={overviewModalShow} handleClose={hideOverviewModal} deviceModelData={selectedDeviceModelData} />
    </div>)

}

export default DeviceModelList