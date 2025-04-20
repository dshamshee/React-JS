import { useEffect, useState } from "react"
import { postData, updateData } from "../api/PostApi"

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    })

    const isEmpty = Object.keys(updateDataApi).length === 0;

    useEffect(() => {
        updateDataApi && setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || "",
        })
    }, [updateDataApi])

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAddData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const addPostData = async () => {
        try {
            const res = await postData(addData)
            console.log("res", res)
            if (res.status === 201) {
                setData([...data, res.data])
                setAddData({ title: "", body: "" })
            }
        } catch (error) {

        }
    }

    const updatePostData = async () => {
       const res = await updateData(updateDataApi.id, addData)
       console.log(res)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value;
        if(action === "Add"){
            addPostData();
        }else if(action === "Edit"){
            updatePostData()
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className="flex m-5 gap-8 w-fit justify-center px-8 py-3 rounded-md bg-gray-800">

            <div className="w-[300px]">
                <label htmlFor="title"></label>
                <input
                    className="w-full px-4 rounded-md py-2 bg-white"
                    type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    value={addData.title}
                    onChange={handleInputChange}
                />
            </div>

            <div className="w-[300px]">
                <label htmlFor="body"></label>
                <input
                    className="bg-white w-full px-4 rounded-md py-2"
                    type="text"
                    autoCapitalize="off"
                    placeholder="Add Post"
                    id="body"
                    name="body"
                    value={addData.body}
                    onChange={handleInputChange}
                />
            </div>
            <button
                className="bg-emerald-400 hover:bg-emerald-500 cursor-pointer px-8 rounded-md font-bold"
                type="submit"
                value={isEmpty ? "Add" : "Edit"}>
                {isEmpty ? "Add" : "Edit"}
            </button>
        </form>
    )
}