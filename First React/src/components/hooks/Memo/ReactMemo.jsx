import { useMemo, useState } from "react"
import Counts from "./MemoCount"

export const ReactMemo = () => {
    const [count, setCount] = useState(0)

    const myBioData = useMemo(() => {
        return {
            name: "Danish Shamshee",
            age: 24
        }
    }, [])



    return (
        <>
            <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
                <h1>{count}</h1>
                <button
                    className="btn bg-cyan-500 py-1 px-3"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    Increament
                </button>
            </div>
            <Counts myBioData={myBioData} />
        </>
    )
}