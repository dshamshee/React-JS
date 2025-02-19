import { useState } from 'react';
import './index.css'

export const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        message: "",
    })

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setUser((prev)=> ({...prev, [name]: value}) )
    }

    const handleSubmitForm = (e)=>{
        e.preventDefault();
        console.log(user);
    }


    return (
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form action="" onSubmit={handleSubmitForm}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' required autoComplete='off' value={user.username} onChange={handleInputChange} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required autoComplete='off' value={user.email} onChange={handleInputChange} />

                    <label htmlFor="message">Message</label>
                    <textarea
                        type="password"
                        name='message'
                        required
                        autoComplete='off'
                        rows="6"
                        value={user.message}
                        onChange={handleInputChange}
                    ></textarea>

                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}