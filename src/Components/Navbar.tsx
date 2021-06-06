import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../contexts/AppContext'
import {Navbar,Button,Nav,NavDropdown} from 'react-bootstrap'
import { setupMaster } from 'cluster'
const SiteNavbar : React.FC  = ()=>{


    const {user,confirmLogout,accessToken} = useContext(AppContext)
    

    return(
        <Navbar style={{backgroundColor:"#04AA6D"}}  expand="lg">
        <Navbar.Brand href="#home">Test App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
     
      <NavDropdown title="User" id="basic-nav-dropdown"  >
        <NavDropdown.Item href="#action/3.1">
            {accessToken ? <Navbar.Text>
                        Signed in as: <a href="#">{user ? user.email :null}</a>
                        </Navbar.Text>   :null}
        </NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.2" onClick={confirmLogout} > {accessToken   ?
            <a    >
                    Logout
            </a>
        : null}</NavDropdown.Item>
     
      </NavDropdown>
    </Nav>
        
                {accessToken ? 
                        <>    
                       
                        <p>{" "}</p>

                        </>

                :null}
        </Navbar.Collapse>
        </Navbar>
    )
}

export default SiteNavbar;