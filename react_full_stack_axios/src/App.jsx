import { useEffect } from "react";
import { getPost } from "./api/PostApi";

const App = ()=>{

  // console.log(getPost()) // It will return a promise

  // handle promises with async/await (to avoid .then approach)
  const getPostData = async ()=>{
    const res = await getPost();
    console.log(res.data);
  }

  useEffect(()=>{
    getPostData();
  },[])

  return <h1>Hello React CRUD Operations</h1>
}


export default App;