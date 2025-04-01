import { useState, memo, useCallback } from "react"

const Button = memo(({ onClick, children }) => {
    console.log(`Rendering Button: ${children}`)

    return (
        <button
            className={`mb-4 text-black py-2 px-5 ${children === "Increament" ? "bg-green-400" : "bg-red-400"}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
})


export default function UseCallback() {
    const [count, setCount] = useState(0)

    // const increament = ()=>{}
    const increament = useCallback(() => {
        console.log("increament inside")
        setCount((prevCount) => prevCount + 1)
    }, [])


    // const decreament = ()=>setCount((prevCount)=> prevCount - 1)
    const decreament = useCallback(() => {
        console.log("decreament inside")
        setCount((prevCount) => prevCount - 1)
    }, [])


    return (
        <div
            className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <h1 className="mb-4">Count: {count}</h1>
            <Button onClick={increament} >Increament</Button>
            <Button onClick={decreament} >Increament</Button>

        </div>
    )
}