const todoKey = "reactTodo";

export const getLocalStorageTodoDate = ()=>{
    const rawTodos = localStorage.getItem(todoKey);
    if(!rawTodos) return [];
    return JSON.parse(rawTodos);
}


export const setLocalStorageTodoDate = (task)=>{
   return localStorage.setItem(todoKey, JSON.stringify(task));
}