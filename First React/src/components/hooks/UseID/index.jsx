import { useId } from "react"

export const UseID = ()=>{
    // const username = useId();
    // const password = useId();
    // const email = useId();
    // return(
    //     <form action="">
    //         <div>
    //             <label htmlFor={username}>Username:</label>
    //             <input type="text" className="border border-black" id={username} name="name" />
    //         </div>
    //         <div>
    //             <label htmlFor={password}>password: </label>
    //             <input type="text" className="border border-black" id={password} name="name" />
    //         </div>
    //         <div>
    //             <label htmlFor={email}>Email: </label>
    //             <input type="email" className="border border-black" id={email} name="email" />
    //         </div>
    //         <button type="submit">Submit</button>
    //     </form>
    // )




// This lets you avoid calling useID for every single element that needs a unique id
    const id = useId();
    return(
        <form action="">
            <div>
                <label htmlFor={id + "username"}>Username:</label>
                <input type="text" className="border border-black" id={id + "username"} name="name" />
            </div>
            <div>
                <label htmlFor={id + "password"}>password: </label>
                <input type="text" className="border border-black" id={id + "password"} name="name" />
            </div>
            <div>
                <label htmlFor={id + "email"}>Email: </label>
                <input type="email" className="border border-black" id={id + "email"} name="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}