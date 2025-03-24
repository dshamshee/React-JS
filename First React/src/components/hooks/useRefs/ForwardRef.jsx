import { forwardRef, useId, useRef } from "react"
import "./index.css";
export const ForwardRef = ()=>{

    const username = useRef(null)
    const password = useRef(null)

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }

    return(
        <form onSubmit={handleFormSubmit}> 
        <BeforeReact19Input label="username" ref={username} />
        <BeforeReact19Input label="password" ref={password} />
        <button>Submit</button>

        </form>
    )
}


// I need to create BeforeReact19Input component
// const BeforeReact19Input = forwardRef((props, ref)=>{
//     const id = useId();
//     return(
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//             <input  className="bg-white" type="text" ref={ref} />
//         </div>
//     )
// })


// After React 19
const BeforeReact19Input = (props)=>{
                        //{label, ref} also destructuring the props
    const id = useId();
    return(
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input  className="bg-white" type="text" ref={props.ref} />
        </div>
    )
}