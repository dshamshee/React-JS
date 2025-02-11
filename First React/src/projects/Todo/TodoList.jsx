import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({data, checked, onHandleDeleteTodo, onHandleChackedTodo}) => {
    
    return (
        <li className="todo-item">
            <span className={checked ? "line-through": ""} >{data}</span> {/* yaha line-through Tailwind-CSS ka use kiya hai */}
            <button className="check-btn" onClick={()=> onHandleChackedTodo(data)}>
                <MdCheck/>
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}