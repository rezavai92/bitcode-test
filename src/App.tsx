import React from 'react'
import Home from './Components/Home'
import AppContextProvider from './contexts/AppContext'
import Layout from './Components/Layout'
const App : React.FC  =()=>{
return(<AppContextProvider>

 
   <Home/>
 
</AppContextProvider>)
} 

export default App;