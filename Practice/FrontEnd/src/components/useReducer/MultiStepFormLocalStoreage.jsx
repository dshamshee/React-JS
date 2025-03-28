const formData = "MultiStepFormData";

export const getLocalStorageFormData = ()=>{
    const rawFormData = localStorage.getItem(formData);
    if(!rawFormData) return [];
    return JSON.parse(rawFormData);
}


export const setLocalStorageFormData = (task)=>{
   return localStorage.setItem(formData, JSON.stringify(task));
}