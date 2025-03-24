import { useContext } from "react"
import { BioContext } from "./Index"

export const About = ()=>{

   const {myName, myAge} = useContext(BioContext)
    return(
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}>
        <h1>Hello, Context API (About). My name is {myName}. I'm {myAge} Years old</h1>
        </section>
    )
}