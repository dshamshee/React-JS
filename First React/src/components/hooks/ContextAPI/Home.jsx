import { useContext } from "react"
import { BioContext, useBioContext } from "./Index"

export const Home = ()=>{

//    const {myName, myAge} = useContext(BioContext)
   const {myName, myAge} = useBioContext(); // Using Custom Hook (useBioContext() Hook)
    return(
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}>
        <h1>Hello, Context API. My name is {myName}. I'm {myAge} Years old</h1>
        </section>
    )
}