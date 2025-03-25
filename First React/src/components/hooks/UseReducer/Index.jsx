import { useReducer } from "react"

export const ReducerComp = () => {

    const initialState = {
        count: 0,
        inc: 2,
        dec: 2
    }

    const reducer = (state, action) => {
        // console.log(state, action)
        // if(action.type === "INCREAMENT"){
        //     return state +1 ;
        // }

        // if(action.type === "DECREAMENT"){
        //     return state - 1 ;
        // }

        // if(action.type === 'RESET'){
        //     return state = 0;
        // }


        switch (action.type) {
            case 'INCREAMENT':
                return {...state, count: state.count + state.inc}

            case 'DECREAMENT':
                return {...state, count: state.count - state.dec}

            case 'RESET':
                return {...state, count: 0}


            default: return state;
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log(useReducer())
    return (
        <>
            <div className="p-4 h-lvh flex flex-col justify-center items-center">
                <h1>{state.count}</h1>
                <button onClick={() => dispatch({ type: "INCREAMENT" })}>Increament</button>
                <button onClick={() => dispatch({ type: "DECREAMENT" })}>Decreament</button>
                <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            </div>
        </>
    )
}