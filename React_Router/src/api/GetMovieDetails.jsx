// import { useParams } from "react-router-dom";

export const getMoviesDetails = async ({params})=>{

    // const params = useParams(); // It will give an error because you can call any Hook inside a Component only not a function
    // console.log(params)
    const id = params.movieID

    try {
       const responce1 = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
       const data1 = responce1.json()

    //    const responce2 = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic`)
    //    const data2 = responce2.json()

    //    return {data1, data2};
    return data1
    } catch (error) {
        console.log(error)
    }
}