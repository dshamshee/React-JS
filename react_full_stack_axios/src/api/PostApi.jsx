import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});


// get method 
// when anywhere in the project we call this function it will attach the /posts route to the base url and fetch the data
export const getPost = ()=>{
    return api.get('/posts');
}