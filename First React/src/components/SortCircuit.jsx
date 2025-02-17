import { useState } from "react";

const ShortCircuitExample = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [user, setUser] = useState("")
    return (
        <section className="container p-5 w-full">
            <h1 className="text-center font-bold text-4xl">Welcome to the ShortCircuit Evaluation</h1>

            {/* Conditional rendering using shortcircuit evaluation */}
            { isLoggedIn && <p className="font-bold text-lg ml-10">You are loged in </p>}

            {/* Another Example of Short Circuit evaluation */}
            {user ? `Hello ${user}`: "Please Log in"}

            <div className="grid-three-cols ml-8">
                <button onClick={()=> setIsLoggedIn(!isLoggedIn)} className="bg-black m-2 text-white px-20 py-1 rounded-md font-bold ">Toggle login state </button>
                <button onClick={()=> setUser("Danish")} className="bg-black m-2 text-white px-20 py-1 rounded-md font-bold ">Set User </button>
                <button onClick={()=> setUser("")} className="bg-black m-2 text-white px-20 py-1 rounded-md font-bold ">Clear User</button>
            </div>
        </section>
    )
}

export default ShortCircuitExample;