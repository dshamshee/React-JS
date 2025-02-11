import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoDate, setLocalStorageTodoDate } from "./TodoLocalStoreage";

export const Todo = () => {

    // const [task, setTask] = useState([]);
    const [task, setTask] = useState( ()=> getLocalStorageTodoDate());

    const handleFormSubmit = (inputValue) => {
        // Because the inputValue is an object with id, content, checked properties in TodoForm Component
        const { id, content, checked } = inputValue;

        // To check if the input feild is empty or not
        if (!content) return;

        // To check if the data is already existing or not 
        // if (task.includes(inputValue)) return; // It is only valid for an array (not an Array of an Object)
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
        if (ifTodoContentMatched) return;


        setTask((prevTask) => [...prevTask, { id, content, checked }])
    }


    // Add Data to LocalStorage 
    setLocalStorageTodoDate(task);


    // Delete Task Functionality
    const handleDeleteTodo = (value) => {
        // console.log(task);
        // console.log(value)
        // console.log(task.splice(value, 1));
        // task.splice(task.indexOf(value), 1); // It will delete the first occurrence of the value
        const updatedTask = task.filter((curTask) => curTask.content !== value); // It will delete all occurrences of the value
        setTask(updatedTask);
    }

    // Delete all tasks functionality
    const handleClearTodoData = () => {
        setTask([]);
    }

    // Handle Check/Uncheck ToDo functionality
    const handleCheckedTodo = (content)=>{
        const updatedTask = task.map( (curTask)=> {
            if(curTask.content === content){
                return{ ...curTask, checked: !curTask.checked }
            }else{
                return curTask;
            }
        })

        setTask(updatedTask);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrderList">
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo={handleDeleteTodo}
                                    onHandleChackedTodo={handleCheckedTodo}
                                />
                            )
                        })
                    }
                </ul>
            </section>

            <section>
                <button className="clear-btn cursor-pointer" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}