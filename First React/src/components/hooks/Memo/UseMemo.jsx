import { useMemo } from "react";
import { useState } from "react";


const EcpensiveComponent = ()=>{
    const sum = ()=>{
        console.log("Calculating Sum...")
        let i = 0; 
        for(i = 0; i<= 1000000000; i++){
             i = i + 1 ;
        }
        return i ;
    }

    const total = useMemo(()=> sum(), []);

    // const total = sum();

    return <p> Sum: {total}</p>
}


const MemoParentComponent = ()=>{
    const [count, setCount] = useState(0)

     return (
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <EcpensiveComponent />
            <button
            className="py-3 px-6 bg-cyan-400 rounded-sm"
            onClick={()=> setCount((prev)=> prev + 1)}
            >
                Re-render parent
            </button>
            <p>Parent re-renders: {count}</p>
        </div>
     )
}


export default MemoParentComponent; 