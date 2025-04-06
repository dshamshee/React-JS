// import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Card } from "../components/UI/Card"
import { getMovie } from "../services/GetService"

export const Movie = ()=>{
    const [data, setData] = useState([])

    // const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"

    
    const getMovieData = async ()=>{
       try {
        // const res = await axios.get(API)
        const res = await getMovie();
        console.log(res.data.Search)
        setData(res.data.Search)
       } catch (error) {
        console.log("Error message:", error.message)
        console.log("Error status:", error.response.status)
        console.log("Error data:", error.response.data)
       }
    }

    useEffect(() => {
        getMovieData()
    }, [])
    

    return(
        <ul className="container grid grid-four--cols">
            {
                data.map((curElem)=>{
                    return <Card key={curElem.imdbID} movieData={curElem} />
                })
            }
        </ul>
    )
}