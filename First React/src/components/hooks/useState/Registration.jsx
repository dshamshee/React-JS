import { useState } from "react"
import './index.css'
import { CgEnter } from "react-icons/cg"

export const RegistrationForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "phone":
                setPhoneNumber(value);
                break;
            default:
                console.log("Invalid input");
                break;
        }

    }

    const handleFormSubmit = (event)=>{
        event.preventDefault()
        
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        }
        console.log(formData)
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter FirstName"
                        required
                        value={firstName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter LastName"
                        required
                        value={lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />


                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        value={password}
                        onChange={handleInputChange}
                    />


                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>
                    <input
                        type="phone"
                        name="phone"
                        placeholder="9430856365"
                        required
                        value={phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>By creating an account you agree to our
                        <a href="" style={{ color: "dodgerblue" }}>Terms & Privacy</a>
                    </p>


                    <div className="clearfix">
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
            </form>

            <section className="summary" style={{textAlign: "center", marginTop: "30px"}}>
                <p>
                    Hello my name is 
                    <span>{firstName} {lastName}</span>
                    my email address is <span>{email}</span>
                    and my phone number is 
                    <span>{phoneNumber}</span>
                </p>
            </section>
        </>
    )
}