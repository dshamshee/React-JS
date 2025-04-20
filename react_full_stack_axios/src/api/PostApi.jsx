import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});


// get method 
// when anywhere in the project we call this function it will attach the /posts route to the base url and fetch the data
export const getPost = ()=>{
    return api.get('/posts');
}


// Delete Method 
export const deletePost = (id)=>{
    return api.delete(`/posts/${id}`)
}


// Post Method 
export const postData = (post)=>{
    return api.post("/posts", post)
}

// PUT Method
export const updateData = (id, post)=>{
    return api.put(`/posts/${id}`, post)
}