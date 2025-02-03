import { useState } from "react";
// const users = 


export const DericedState = ()=>{
    const [users, setUsers] = useState([
        {name: "Danish", age:23},
        {name: "Muskan", age:22},
        {name: "Raushni", age:21},
        {name: "Archana", age:20},
    ]);

    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                { users.map((user, index)=>{
                return <li key={index}> {user.name} - {user.age} years old </li>
                
                }) }
            </ul>
        </div>
    )
}