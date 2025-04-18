import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
// import '../App.css'

export const Posts = () => {

    const [data, setData] = useState([])
    // console.log(getPost()) // It will return a promise

    // handle promises with async/await (to avoid .then approach)
    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        setData(res.data)
    }

    useEffect(() => {
        getPostData();
    }, [])

    return (
        <section className="section-post p-5 bg-gray-900">
            <ul className="grid grid-cols-3 gap-8">
                {
                    data.map((curElem) => {
                        // const { id, body, title } = curElem;
                        return (
                            <li key={curElem.id} className="w-full max-w-[500px]">
                                <Card curElem={curElem} data={data} setData={setData} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}


const Card = ({ curElem, data, setData }) => {
    const { id, body, title } = curElem;

    // function to delete post
    const handleDeletePost = async (id) => {
        try {
            const res = await deletePost(id)
            if (res.status === 200) {
                const newUpdatedPosts = data.filter((curPost) => {
                    return curPost.id !== id;
                })
                setData(newUpdatedPosts);
            }else{
                console.log("Failed to delete the post", res.status)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="card flex flex-col justify-between px-5 py-5 h-[300px] my-5 rounded-md shadow-sm shadow-white bg-gray-800 text-white">
            <p>{id}</p>
            <div className="content flex flex-col gap-2">
                <p className="">Title: {title}</p>
                <p className="">Body: {body}</p>
            </div>
            <div className="btn">
                <button className="bg-emerald-400 hover:bg-emerald-500 px-8 rounded-md text-black text-lg mr-5 cursor-pointer">Edit</button>
                <button onClick={() => handleDeletePost(id)} className="btn-delete bg-red-500 hover:bg-red-700 text-black px-5 rounded-md text-lg cursor-pointer">Delete</button>
            </div>
        </div>
    )
}