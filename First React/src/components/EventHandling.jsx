import "./EV.css";

export const EventHandling = () => {

    // Traditional function 
    // function handleOnClilckButton (event){
    //     alert("Hey I am onClick Event ")
    // }

    // Fat arrow function
    const handleOnClilckButton = (event) => {
        console.log(event);
        console.log('Target', event.target)
        console.log('Type', event.type)
        alert("Hey I am onClick Event ")
    }

    const handleWelcomeUsers = (user) =>{
        console.log(`Welcome ${user} to our website`)
    }

    return (
        <>
            {/* Function Components with Named Function
            Remember how we heven't called this function, if you call this function here then it will run without even clicking. 
            you just need to pass reference and not call here
        */}

            <button onClick={handleOnClilckButton} className="mr-3 text-2xl font-bold border p-3 text-center">Click Me</button>

            {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly
                in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler funciton. 
                This is because the arrow function create a new function and calls your handler without passing any arguments.
            */}
            <button onClick={() => handleOnClilckButton(event)} className="mr-3 text-2xl font-bold border p-3 text-center">Click Me 2</button>

            {/* Inline Event Handler  */}
            <button onClick={(event) => console.log(event)} className="text-2xl font-bold border p-3 text-center">Inline Event Handler</button>

            {/* Function Components with Inline Arrow Function */}
            <button onClick={(event) => {
                alert("Hey I am Inline Event function")
                console.log("Target: ", event.target)
                console.log("Type: ", event.type)
            }
            } className="ml-3 text-2xl font-bold border p-3 text-center">Inline Arr Fun</button>

            {/* Passing Arguments to Event Handlers */}
            {/* <button onClick={handleWelcomeUsers("Danish")}>Passing Arguments</button> Wrong way */}
            <button onClick={ ()=> handleWelcomeUsers("Danish")} className="ml-3 text-2xl font-bold border p-3 text-center">Passing Arguments</button>

        </>
    )
}