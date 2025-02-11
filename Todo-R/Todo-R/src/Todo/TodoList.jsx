import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ id, data, checked, onHandleDeleteTodo, onHandleChackedTodo }) => {
    return (
        <li className="todo-item">
            <span className={checked ? "line-through" : ""}>{data}</span>
            <button className="check-btn" onClick={() => onHandleChackedTodo(id)}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(id)}>
                <MdDeleteForever />
            </button>
        </li>
    );
};  