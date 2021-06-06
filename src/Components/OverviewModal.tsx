import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { DeviceModelDataType } from '../models/device.model'
import './Overview.css'
interface Props {
    show: boolean;
    handleClose: () => void;
    deviceModelData: DeviceModelDataType[] | undefined;
};
const OverviewModal = (props: Props) => {

   
    const { show, handleClose, deviceModelData } = props;
    console.log("device model data is", deviceModelData);
    return (<div>

        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{
                backgroundColor: "#04AA6D",
                color: "white"
            }} >
                <Modal.Title>
                    {
                        deviceModelData && deviceModelData.length > 0 ?
                            <p style={{ fontSize: "1rem" }} >{
                                " Brand : " + deviceModelData[0].Brand + " - " + " Model : " + deviceModelData[0].Model} </p>
                            : "No Model Data Found"
                    }

                </Modal.Title>

            </Modal.Header>
            <Modal.Body>

                <div className="overview-grid" >
                    {deviceModelData?.map((item) => {

                        return (<div className="overview-box" >

                            <p>  <span style={{ fontWeight: "bold" }} >Id : </span> {item.Id}</p>
                            <p>   <span style={{ fontWeight: "bold" }} >Data Type : </span> {item.DataType}</p>
                            <p>   <span style={{ fontWeight: "bold" }} >Name : </span> {item.Name}</p>
                            <p>   <span style={{ fontWeight: "bold" }} >Display Name : </span> {item.DisplayName} </p>
                            <p>    <span style={{ fontWeight: "bold" }} >Status : </span> {item.Status} </p>
                            <p>   <span style={{ fontWeight: "bold" }} >Group Id : </span> {item.GroupId}</p>
                            <p>   <span style={{ fontWeight: "bold" }} >Description : </span> {item.Description}</p>
                            <p>    <span style={{ fontWeight: "bold" }} >Proto Color : </span> {item.ProtocolOrder} </p>


                        </div>)
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>

            </Modal.Footer>
        </Modal>
    </div>)


}
export default OverviewModal;