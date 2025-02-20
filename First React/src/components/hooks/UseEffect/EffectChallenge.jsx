import { useEffect, useState } from 'react'
import './index.css'

export const Challenge = ()=>{

    const [count, setcount] = useState(0);
    const [name, setName] = useState("");

    const handleInputChange = (e)=>{
        setName(e.target.value);
    }

    const handleCounter = ()=>{
        setcount(count + 1);
    }

    useEffect(()=>{
        document.title = `Count: ${count}`;
    },[count])

    useEffect(()=>{
        console.log(name);
    }, [name])

    return(
        <div className="container effect-container">
            <h1>useEffect Challenge</h1>

            <p>
                Count <span>{count}</span>
            </p>

            <button onClick={handleCounter}>Increament</button>

            <p>
                Name: <span>{name}</span>
            </p>

            <input
             className='bg-white'
              type="text"
              value={name}
              onChange={handleInputChange}
               />
        </div>
    )
}


//! React Hook Challenge: Dynamic State management and Document Title update with useEffect 


//* Description: In this challenge you'll create a React component that dynamically manages state using `useState` and `useEffect` hooks. your component will incude:
//? 1. A counter that increaments when a button is clicked 
//? 2. An input feild where users can type their name
//? 3. The Document title will update to show the current count.