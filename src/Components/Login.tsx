import React,{useState,useEffect,useContext} from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import {AppContext} from '../contexts/AppContext'
//import {Redirect} from 'react-router-dom';
import './login.css'
const Login: React.FC = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {confirmLogin} = useContext(AppContext);
    const handleInputChange = (type: string,e:React.ChangeEvent<HTMLInputElement>)=>{

        if(type=="email"){
            setEmail(e.target.value);
        }
        else{
            setPassword(e.target.value);
        }

    }
    const loginHandler  = async (e:React.ChangeEvent<HTMLFormElement>)=>{

        e.preventDefault();

        try{
           const response = await axios.post("http://163.47.115.230:30000/api/login",{
                email,
                password
            });
            const {access_token,user,expires_in} = response.data;
            console.log(response.data)
            confirmLogin(access_token,user,  parseInt(expires_in)/24 ) ;
            console.log("inside login page , token ",access_token)
            
            


        }
        catch(err){
            
            window.alert(err);
        }



    }
    return (
        <div className="login-container" >

            <div className="login-box">
                <Form onSubmit={loginHandler} >
                    <h3 style={{textAlign:"center"}} >User Login</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email}
                         onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{
                            handleInputChange("email",e);
                        }} />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"   
                        onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{
                            handleInputChange("password",e);
                        }} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>)

}
export default Login;