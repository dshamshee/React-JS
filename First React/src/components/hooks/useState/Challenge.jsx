import { useState } from "react"

export const CounterChallenge = () => {

    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState(1);

    const handleIncreament = () => {
        if (inputValue !== "") {
            const newCount = count + parseInt(inputValue)
            if (newCount <= 100) setCount(newCount)
            else setCount(100);
        }
    }

    const handleDecreament = () => {
        if (inputValue !== "") {
            const newCount = count - parseInt(inputValue);
            if (newCount >= 0) setCount(newCount)
            else setCount(0);
        }
    }


    return (
        <div className="bg-amber-400 p-5 w-[700px] h-auto rounded-md">
            <h1 className="text-center font-bold text-3xl">useState Challenge</h1>

            <p className="text-lg mt-5">
                Count: <span>{count}</span>
            </p>

            <div className="mt-3">
                <label>
                    Step: <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className="border rounded-md px-1" placeholder="Increament.." type="number" />
                </label>
            </div>


            <div className="btn w-auto mt-14">
                <button onClick={handleIncreament} disabled={count >= 100} className="w-fit px-3 cursor-pointer  rounded-md text-white py-1 bg-blue-700">Increament</button>
                <button onClick={handleDecreament} disabled={count <= 0} className="w-fit ml-8 cursor-pointer  rounded-md text-white py-1 px-3 bg-blue-700">Decreament</button>
                <button onClick={() => setCount(0)} className="w-fit ml-8  cursor-pointer rounded-md text-white py-1 px-3 bg-blue-700">Reset</button>
            </div>
        </div>
    )
}