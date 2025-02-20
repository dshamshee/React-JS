import { useEffect } from "react"
import "./index.css"
import { useState } from "react"

export const ReactUseEffect = () => {

    const [date, setDate] = useState(0)

    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date()
            setDate(updatedDate.toLocaleTimeString())
        }, 1000);
    }, [])


    return (
        <div className="container effect-container">
            <p>date: {date}</p>
        </div>
    )
}