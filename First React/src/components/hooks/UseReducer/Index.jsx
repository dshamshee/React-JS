import { useReducer } from "react"

export const ReducerComp = ()=>{

    const reducer = (state, action)=>{
        console.log(state, action)
        if(action.type === "INCREAMENT"){
            return state +1 ;
        }

        if(action.type === "DECREAMENT"){
            return state - 1 ;
        }
    }


    const [count, dispatch] = useReducer(reducer, 0)
    // console.log(useReducer())
    return(
        <>
            <div className="p-4 h-lvh flex flex-col justify-center items-center">
                <h1>{count}</h1>
                <button onClick={()=> dispatch({type: "INCREAMENT"})}>Increament</button>
                <button onClick={()=> dispatch({type: "DECREAMENT"})}>Decreament</button>
            </div>
        </>
    )
}