function Profile (){
    return (
        <div>
            <h1>Profle Card Challege</h1>
            <ProfileCard
            name="Danish"
            age={23}
            greeting={
                <div>
                    <strong>Hi Danish, have a wonderful day!</strong>
                </div>
            }
            >
                <p>Hobbies: Coding, Gaming</p>
                <button>Contact</button>
            </ProfileCard>


            <ProfileCard
            name="Muskan"
            age={22} // We can not pass Interger Values directly to the props (use {} Curly-Braces )
            greeting={
                <div>
                    <strong>Hi Muskan, have a wonderful day!</strong>
                </div>
            }
            >
                {/* Childrens  */}
                <p>Hobbies: Sleeping, Eating</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}


export default Profile;


function ProfileCard(props) {
    const {name, age, greeting, children} = props;
    return(
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            {greeting}
            <div>{children}</div>
        </>
    )
}