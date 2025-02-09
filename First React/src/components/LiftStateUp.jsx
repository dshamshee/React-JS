import { useState } from "react"

export const LiftingState = ()=>{
    const [inputValue, setInputValue] = useState("") // LiftingUp state variable of child component 
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    )
}


const InputComponent = ({inputValue, setInputValue})=>{
    // const [inputValue, setInputValue] = useState("")  // child state variable 
    return(
        <>
            <input type="text" placeholder="Enter your name" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        </>
    )
}


const DisplayComponent = ({inputValue})=>{
    return <p>The Current Input Value is: {inputValue} </p>
}