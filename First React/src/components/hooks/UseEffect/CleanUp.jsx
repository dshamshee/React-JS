import { useEffect, useState } from "react"
import './Index.css'


export const CleanUp = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {

       const timer = setInterval(() => {
            setCount((prev)=> prev + 1);
        }, 1000);


        return()=> clearInterval(timer)
    }, [])

    return (
        <div className="container">
            <div className="counter">
                <p>Hello, This is Danish Shamshee</p>
                <div className="odometer" id="odometer">
                    {count}
                </div>
                <h3 className="title">Subscribers <br /> Realtime counter</h3>
            </div>
        </div>
    )
}