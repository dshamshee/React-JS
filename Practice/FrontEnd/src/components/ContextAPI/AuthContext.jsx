import { createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({children})=>{

    const [isLoggedin, setIsloggedin] = useState(false);

    const handleAuthToggle = ()=>{
        return setIsloggedin((prevState)=> (prevState === false ? true : false));
    }

    return <Authcontext.Provider value={{isLoggedin, handleAuthToggle}}>
        {children}
    </Authcontext.Provider>
}


