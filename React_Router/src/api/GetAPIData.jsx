
export const getMoviesData = async ()=>{
    try {
       const responce = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=32577321&s=titanic")
       const data = responce.json()
       return data;
    } catch (error) {
        console.log(error)
    }
}