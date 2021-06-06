import userEvent from '@testing-library/user-event';
import Cookies from  'js-cookie'
import React,{createContext,useState,useEffect} from 'react'


interface User {

    id : string | number|undefined;
    email : string | undefined;

}  ;
interface AppContextInterface {
    user : User | undefined,
    accessToken : string | undefined,
    confirmLogin : (token : string,user:User,expiresIn :number|Date)=>void;
    confirmLogout : ()=>void;
}
export const AppContext  =  createContext <AppContextInterface> ({user:undefined , accessToken:undefined,confirmLogin :(a:string,b:User,c:number|Date)=>{},
confirmLogout:()=>{

}
});

interface Props {

    children : React.ReactElement
}

const AppContextProvider = (props:Props)=>{

    const [user,setUser] = useState<User|undefined>();
    const [accessToken,setAccessToken] = useState <string | undefined> ();

    useEffect(()=>{
        setAccessToken(Cookies.get("accessToken"));
        setUser( Cookies.getJSON("user"))
        
    },[])
    //login
    const confirmLogin=(token:string,user :User,expiresIn : number |Date )=>{
        
        setUser(user);
        setAccessToken(token);
        Cookies.set("accessToken",token,{expires: expiresIn})
        Cookies.set("user" ,user )

        console.log("inside context confirm login ,token ",accessToken)
    }

    // log out

    const confirmLogout = ()=>{

        Cookies.remove("accessToken");
        Cookies.remove("user")
        setAccessToken(Cookies.get("accessToken"))
        setUser(Cookies.getJSON("user"))
    }

    return(<div>
        <AppContext.Provider value={{user,accessToken,confirmLogin ,confirmLogout }} >
            {props.children}
        </AppContext.Provider>
    </div>)
}

export default AppContextProvider;