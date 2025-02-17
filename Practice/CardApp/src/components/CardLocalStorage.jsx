const cardKey = "reactCard";

export const getLocalStorageCards = ()=>{
    const rawCards = localStorage.getItem(cardKey);
    if(!rawCards) return [];
    return JSON.parse(rawCards);
}


export const setLocalStorageCards = (task)=>{
   return localStorage.setItem(cardKey, JSON.stringify(task));
}