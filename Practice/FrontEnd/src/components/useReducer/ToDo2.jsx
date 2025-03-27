import { useReducer } from "react";
import { useState } from "react"; // (You'll replace this with useReducer later)
import { compile } from "tailwindcss";

export default function TodoList2() {

    const initialState = {
        todos: [
            // { id: 1, text: "Buy milk", completed: false }, // Use "completed" instead of "checked" for clarity
        ],
        inputText: "", // Track input separately
    };

    // Action types (best practice to use constants)
    const ADD_TODO = "ADD_TODO";
    const TOGGLE_TODO = "TOGGLE_TODO";
    const DELETE_TODO = "DELETE_TODO";
    const CLEAR_ALL = "CLEAR_ALL";
    const SET_INPUT_TEXT = "SET_INPUT_TEXT";

    const reducer = (state, action) => {
        switch (action.type) {
            case SET_INPUT_TEXT:
                return {
                    ...state,
                    inputText: action.payload
                }

            case ADD_TODO:
                if (!state.inputText.trim()) return state
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        {
                            id: Date.now(),
                            text: state.inputText,
                            completed: false,
                        }
                    ],
                    inputText: ""
                }

            case TOGGLE_TODO:
                return {
                    ...state,
                    todos: state.todos.map((todo) => {
                        return todo.id === action.payload
                            ? { ...todo, completed: !todo.completed }
                            : todo
                    })
                }

            case DELETE_TODO:
                return {
                    ...state,
                    todos: state.todos.filter((todo) => todo.id !== action.payload)
                }

            case CLEAR_ALL:
                return {
                    ...state,
                    todos: []
                }
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState); // useReducer Hook

    // console.log(state);
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="bg-blue-500 px-6 py-4">
                    <h1 className="text-2xl font-bold text-white">Todo List</h1>
                </div>

                {/* Input & Add Button */}
                <div className="px-6 py-4 border-b">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={state.inputText}
                            onChange={(e) => dispatch({ type: SET_INPUT_TEXT, payload: e.target.value })}
                            placeholder="Add a new task..."
                            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            onClick={() => dispatch({ type: ADD_TODO })} // Replace with dispatch
                            disabled={!state.inputText.trim()} // Disable if empty
                        >
                            Add
                        </button>
                    </div>
                </div>

                {/* Todo List */}
                <div className="divide-y">
                    {/* Example Todo Item (Replace with mapped state) */}
                    {
                        state.todos.length === 0 && (
                            <p className="px-6 py-4 text-gray-500 text-center">No todos yet. Add one above!</p>
                        )
                    }
                    {
                        state.todos.map((todo) => {
                            return (
                                <div className="px-6 py-4 flex items-center justify-between" key={todo.id}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            onClick={() => dispatch({ type: TOGGLE_TODO, payload: todo.id })}
                                            className="h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                        />
                                        <span className={`text-gray-800 ${todo.completed === true ? 'line-through text-slate-600' : ''}`}>{todo.text}</span>
                                    </div>
                                    <button className="text-red-500 hover:text-red-700"
                                        onClick={() => dispatch({ type: DELETE_TODO, payload: todo.id })}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }

                    {/* Another Example Todo (Completed) */}
                    {/* <div className="px-6 py-4 flex items-center justify-between bg-gray-50">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                // checked
                                className="h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                            />
                            <span className="text-gray-500 line-through">Build a Todo App</span>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                            Delete
                        </button>
                    </div> */}

                </div>

                {/* Footer (Clear All) */}
                <div className="px-6 py-4 bg-gray-50 text-right">
                    <button
                        className="text-sm text-red-500 hover:text-red-700 font-medium"
                        onClick={() => dispatch({ type: CLEAR_ALL })} // Replace with dispatch
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}