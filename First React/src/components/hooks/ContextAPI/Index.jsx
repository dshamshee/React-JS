import { use } from "react";
import { createContext, useContext } from "react";

// Step 1
export const BioContext = createContext();
// createContext returns a Context Component, not a varibale (the first later of the Context component must be UpperCase)


// Step 2 (Create a Provider)
export const BioProvider = ({children})=>{

    const myName = "Danish Shamshee"
    const myAge = 24

    return <BioContext.Provider value={{myName, myAge}}>
        {children}
    </BioContext.Provider>
}

export const useBioContext = ()=>{
    // const context = useContext(BioContext);
    const context = use(BioContext);
    if(context === undefined){
        throw new Error("Component must be wrapped with BioProvider");
        // console.log("Component must be wrapped with BioProvider");
    }
    return context;
}