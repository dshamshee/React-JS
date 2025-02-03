import "../EV.css"
import { useState } from "react";
export const State = ()=>{
    
    const [count, setCount] = useState(0);
    console.log('Parent Component Rendered')

    // const handleButtonClick = () => {
    //     setCount(prevCount => prevCount + 1);
    // }

    const handleButtonClick = ()=>{
        setCount(prevCount => console.log(prevCount)) // setState() is gives you a Previous StateCount
        setCount( ()=> count + 1  )  // Don't do count++ it gives an Error 

        // setCount( function updateCount(){ return count + 1 } )
    }

    // let array = useState();
    // console.log(array);

    return(
        <>
        <div className="main-div">
            <h1>{count}</h1>
            {/* <button onClick={handleButtonClick} >Increament</button> */}
            <button onClick={handleButtonClick} className="border rounded-2xl">Increament</button>
        </div >
        <ChildComponent count={count} />
        </>
    )
}


function ChildComponent({count}){
    console.log('Child Component Rendered')
    return (
        <div className="main-div">
            <h2 className="text-3xl font-bold">Child Component: {count}</h2>
        </div>
    );
}


