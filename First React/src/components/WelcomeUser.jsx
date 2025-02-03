import "./EV.css";
export const WelcomeUser = (props)=>{
    const {onClick, onMouseEnter} = props;
    const handleGreeting = ()=>{
        console.log('Hay user, Welcome')
        onClick();
    }
    return(
        <>
            <button onClick={onClick}>Click Me</button>
            <button onMouseEnter={onMouseEnter}>Hover Me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}