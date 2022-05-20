import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Footer from "../../Footer";
import '../Signup/signup.css';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

const Signup = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[dateOfBirth, setDateOfBirth] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[address, setAddress] = useState('');
    const[phone, setPhone] = useState(null);
    const[allergy, setAllergy] = useState(null);
    const[errorValue, setErrorValue] = useState('');
    const[errorPresent, setErrorPresent] = useState(false);
    const[isLoading, setIsLoading] = useState(false);
    // const[redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        setIsLoading(true)
        e.preventDefault();

        axios.post('http://localhost:8080/api/v1/signup/', {
            firstName,
            lastName,
            dateOfBirth,
            email,
            password,
            address,
            phone,
            allergy
        }).then(function (response) {
                console.log(response);
                if(response.status === 200) {
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 500);
                    return window.location = "/Login";
                }
        }).catch(err => {
            setErrorValue(JSON.stringify(err.response.data.message));
            setErrorPresent(true);
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 500)
    }

    return (
        <div>
        <div className = "logBackround">
        {/* <body id={"customSignUpBody"}> */}
        <div className="container-signup">
            <h1 id="signupTitle">Register Account</h1>
            <form className = "userForm" onSubmit={submit}>
                <a id="requiredStarLabel">(*) = Field is required.</a>
                <p id="signupSubHeading" style={{marginTop: "10px"}}>First Name*</p>
                <input className="inputFields" type="text" required
                    onChange={e => setFirstName(e.target.value)}
                />
                <p id="signupSubHeading">Last Name*</p>
                <input className="inputFields" type="text" required
                       onChange={e => setLastName(e.target.value)}
                />
                <p id="signupSubHeading">DOB*</p>
                <input className="inputFields" type="date" required
                       onChange={e => setDateOfBirth(e.target.value)}
                />
                <p id="signupSubHeading">Email Address*</p>
                <input className="inputFields" type="email" required
                       onChange={e => setEmail(e.target.value)}
                />
                <p id="signupSubHeading">Password*</p>
                <input className="inputFields" type="password" required minLength={6} maxLength={32}
                       onChange={e => setPassword(e.target.value)}
                />
                <p id="signupSubHeading">Address*</p>
                <input className="inputFields" type="text" required
                       onChange={e => setAddress(e.target.value)}
                />
                <p id="signupSubHeading">Phone Number</p>
                <input className="inputFields" type="text"
                       onChange={e => setPhone(e.target.value)}
                />
                <p id="signupSubHeading">Allergy</p>
                <input className="inputFields" type="text"
                       onChange={e => setAllergy(e.target.value)}
                />
                <div>
                    {errorPresent
                        ? <Alert variant="danger" style={{textAlign: "center", marginTop: "0px", color: "red",
                        fontSize: "17px", marginLeft: "-20%", marginRight: "-20%", textTransform: "none"}}>Error : {errorValue}</Alert>
                        : <Alert variant="success"/>
                    }
                </div>
                {/*<button className="submitButton" type="submit">Submit</button>*/}
                <button className="submitButton" type="submit" disabled={isLoading}>
                    {isLoading && <i class="fas fa-spinner fa-pulse"/>}
                    {!isLoading && <p>Submit</p>}
                </button>
            </form>
        </div>
        <div id="customSignUpFooter">
        </div>
        
        </div>
        <Footer/>
        </div>
    );
}


export default Signup;