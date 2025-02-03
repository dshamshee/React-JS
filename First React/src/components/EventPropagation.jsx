import './EV.css'
export const EventProagation = ()=>{

    const handleGrandParent = ()=>{
        console.log("Grand Parent Clicked");
    }

    const handleParentClick = ()=>{
        console.log("Parent Clicked");
    }

    const handleChildClick = (event)=>{
        event.stopPropagation();
        console.log(event);
        console.log("Child Clicked");
    }


    return(
        <section className="main-div" >
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>Child Div</button>
                </div>
            </div>

        </section>
    )
}