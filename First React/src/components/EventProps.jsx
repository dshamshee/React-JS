import { WelcomeUser } from "./WelcomeUser";

export const EventProps = ()=>{

    const HandleWelcomeUser = (user) =>{
        alert(`Hey, ${user}`);
    }

    const handleHover = () =>{
        alert('Hey, Thanks for hovering me');
    }

    return(
        <>
            <WelcomeUser onClick={ ()=> HandleWelcomeUser("Danish") } 
               onMouseEnter={handleHover} 
               />
        </>
    )
}