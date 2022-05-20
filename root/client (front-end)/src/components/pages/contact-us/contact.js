import React, { useState } from 'react'
import {db} from './firebase'

const Contact = () => {

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");

        const handleSubmit = (e) =>{ e.preventDefault();
        
            db.collection("contacts").add({
                name: name,
                email: email,
                message: message
            })
        .then(() => {
            alert('Message has been submitted');
        })

        .catch(error => {
            alert(error.message);
        })

        setName("");
        setEmail("");
        setMessage("");
         

        };

    return(

        <form className="form" onSubmit = {handleSubmit}>
            <h1>Contact Form</h1>
            <h2>We here at Meals on Wheels are always here to feed and support you on the go!</h2>
            <label> Name</label>
            <input placeholder="Type in your Name" 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />

            <label> Email</label>
            <input placeholder="Type in your E-mail Address"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />

            <label> Message</label>
            <textarea placeholder='How can we help you today?'
            value={message}
            onChange={(e)=> setMessage(e.target.value)}></textarea>

            <button type='submit'>
            Submit
            </button>

        </form>

    )


}


export default Contact