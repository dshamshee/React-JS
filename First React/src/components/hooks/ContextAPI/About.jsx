import { useContext, use } from "react"
import { BioContext } from "./Index"

export const About = ()=>{

//    const {myName, myAge} = useContext(BioContext)
//    const {myName, myAge} = use(BioContext)
const newHook = true; 
let myName, myAge
if(newHook){
    ({myName, myAge}= use(BioContext))
    // We can use this use() Hook conditionaly
}
    return(
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}>
        <h1>Hello, Context API (About). My name is {myName}. I'm {myAge} Years old</h1>
        </section>
    )
}