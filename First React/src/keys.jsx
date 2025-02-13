import { useState } from "react";
import "./Todo.css";
import { MdDeleteForever } from "react-icons/md";
// import { TodoLists } from "./TodoLists";
// import { TodoDate } from "./TodoDate";
// import { MdCheck } from "react-icons/md";

export const Keys = () => {
  const [task, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //   const [date, setDate] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // return if todoInputValue is empty
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    // setTasks can take either a new state value or a function. When it takes a function, React passes the current state (the previous state) as an argument to this function.
    setTasks((prevTasks) => [ inputValue, ...prevTasks]);
    setInputValue("");
  };
//   console.log(task);

  //todo  Add handleDeleteTodo function to delete the current list
  const handleDeleteTodo = (value) => {
    const newUpdateTask = task.filter((curTask) => {
      console.log(curTask);
      return curTask !== value;
    });
    setTasks(newUpdateTask);
  };

  //todo  Add handleClearTodoData function to clear all the data
  const handleClearTodoData = () => {
    setTasks([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List </h1>
        {/* <TodoDate /> */}
      </header>
      <section id="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </section>
      <section className="myUnOderList">
        <ul className="todo-list">
          {task.map((curTask, index) => {
            console.log(curTask);
            return <TodoLists key={index} data={curTask} />;
        //     return (
        //      <li className="todo-item">
        //      <span> {curTask} </span>
        //         <button>
        //      <MdCheck className="check-btn" />
        //      </button>
        //     <button onClick={() => onHandleDeleteTodo(curTask)}>
        //      <MdDeleteForever className="delete-btn" />
        //    </button>
        //    </li>
        //     );
          })}
        </ul>
      </section>
      {/* <div>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </div> */}
    </section>
  );
};


const TodoLists = ({data})=>{
    return(
        <li className="todo-item">
            <span>{data}</span>
            <input className="w-56" type="text" />
            {/* <button>
                <MdCheck className="check-btn" />
            </button> */}
            <button>
                <MdDeleteForever className="delete-btn" />
            </button>
        </li>
    )
}