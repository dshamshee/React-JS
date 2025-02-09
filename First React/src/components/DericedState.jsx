import { useState } from "react";
// const users = 


export const DericedState = ()=>{
    const [users, setUsers] = useState([
        {name: "Danish", age:23},
        {name: "Muskan", age:22},
        {name: "Raushni", age:21},
        {name: "Archana", age:20},
    ]);


// When you create a variable which values can be depended on State or Props then that variable called Derived State 
const userCount = users.length; 
const averageAge = users.reduce((accum, curElem)=> accum + curElem.age, 0) / userCount;

    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                { users.map((user, index)=>{
                return <li key={index}> {user.name} - {user.age} years old </li>
                
                }) }
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Average Age: {averageAge}</p>
        </div>
    )
}