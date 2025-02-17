import { useState } from "react"

export const Counter = ()=>{

    const [count, setCount] = useState(0);
    const handleCounter = ()=>{
        setCount(count+1);
        console.log("inner log ", count);
    }
    console.log("outer log ", count)


    return (
        <div className="container state-container text-center" >
            <h1 className="text-3xl font-bold">useState Hook</h1><br />
            <p className="text-lg">{count}</p>
            <button onClick={handleCounter} className="text-lg bg-zinc-900 text-white px-2 rounded-md cursor-pointer">Increament</button>
        </div>
    )
}