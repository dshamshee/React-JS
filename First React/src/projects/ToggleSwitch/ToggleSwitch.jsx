import { useState } from "react";
import { IoMdSwitch } from "react-icons/io";
// import "./ToggleSwitch.css";
// export const ToggleSwitch = ()=>{

//     const [isOn, setIsOn] = useState(false);

//     const handleToggleSwitch = ()=>{
//         setIsOn(!isOn);
//     }

//     const checkIsOn = isOn ? "ON" : "Off" ;
//     const toggleBGColor = {backgroundColor:  isOn ? "#4caf50" : "#f44336" };

//     return(
//         <>
//             <div className="toggle-switch" style={ toggleBGColor }  onClick={handleToggleSwitch} >
//                 <div className={`switch ${ isOn ? "on" : "off" }`}>
//                     <span className="switch-state">{ checkIsOn }</span>
//                 </div> 
//             </div>
//         </>
//     )
// }

export const ToggleSwitch = ()=>{

    const [isOn, setIsOn] = useState(false)

    const handletoggleSwitch = ()=>{
        setIsOn(!isOn);
    }

    // const positionEnd = "justify-end"
    const circleTransform = isOn ? "translate-x-[210px]" : "translate-x-0"; // Adjust the value based on container width
    const BGColor = isOn ? "bg-green-500" : "bg-red-500";

    return(
        <section className="flex justify-center items-center">
            <div className={`mainContainer p-5 w-[300px] h-[150px] flex  items-center rounded-full cursor-pointer ${BGColor} transition-all duration-1000 ease-in-out `} onClick={handletoggleSwitch}>
                <div className={`curcle w-28 h-28 rounded-full flex justify-center items-center border-2 border-gray-500 transition-all duration-1000 ease-in-out ${circleTransform}`}>
                    <span className="text text-white text-center text-4xl">{ isOn ? "ON" : "OFF" }</span>
                </div>
            </div>
            <h1 className="">Switch Icon <IoMdSwitch  className="text-green-400" /></h1>
        </section>
    )
}
