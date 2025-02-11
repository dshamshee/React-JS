import { useState, useEffect } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await fetch('http://localhost:5000/api/todos');
        const data = await response.json();
        setTask(data);
    };

    const handleFormSubmit = async (inputValue) => {
        const { content } = inputValue;

        if (!content) return;

        const response = await fetch('http://localhost:5000/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content, checked: false }),
        });

        const newTodo = await response.json();
        setTask((prevTask) => [...prevTask, newTodo]);
    };

    const handleDeleteTodo = async (id) => {
        await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: 'DELETE',
        });
        setTask((prevTask) => prevTask.filter((curTask) => curTask._id !== id));
    };

    const handleClearTodoData = async () => {
        await fetch('http://localhost:5000/api/todos', {
            method: 'DELETE',
        });
        setTask([]);
    };

    const handleCheckedTodo = async (id) => {
        const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: 'PATCH',
        });
        const updatedTodo = await response.json();
        setTask((prevTask) =>
            prevTask.map((curTask) =>
                curTask._id === updatedTodo._id ? updatedTodo : curTask
            )
        );
    };

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrderList">
                <ul>
                    {task.map((curTask) => (
                        <TodoList
                            key={curTask._id}
                            id={curTask._id}
                            data={curTask.content}
                            checked={curTask.checked}
                            onHandleDeleteTodo={handleDeleteTodo}
                            onHandleChackedTodo={handleCheckedTodo}
                        />
                    ))}
                </ul>
            </section>

            <section>
                <button className="clear-btn cursor-pointer" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    );
};