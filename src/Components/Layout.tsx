import React from  'react'
import SiteNavbar from './Navbar'

interface Props{

    children : React.ReactElement
}
const Layout = (props:Props)=>{

    return(<>
        <SiteNavbar/>

        {props.children}

        <footer style={{textAlign:"center"}} >
            @copyright 2021 admin
        </footer>
    </>)
}

export default Layout