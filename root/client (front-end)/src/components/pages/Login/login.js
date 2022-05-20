import React, {useState} from 'react';
import '../Login/login.css';
import Footer from "../../Footer";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import authHeader from "./authHeader";

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[isLoading, setIsLoading] = useState(false);
    const[errorPresent, setErrorPresent] = useState(false);

    const submit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        const content = axios.post('http://localhost:8080/login', {
            username,
            password
        }).then(function (response) {
            console.log(response);
            console.log(response.headers);
            if (response.headers.authorization && response.status === 200) {
                setErrorPresent(false);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500)
                localStorage.setItem("token", JSON.stringify(response.headers.authorization));
                localStorage.setItem("loggedIn", "true");
                return window.location = "/";
            }
        }).catch(err => {
            setErrorPresent(true);
            (JSON.stringify(err.response));
        })
        console.log(content);
        setTimeout(() => {
            setIsLoading(false);
        }, 500)

    }

    return (
        <div>
        <div className = "logBackround">
            <div className = "login">
        {/* <body id={"customLoginBody"}> */}
        
            <h1 className= "logTitle" id="loginTitle">Account Login</h1>
            <form className= "userForm" onSubmit={submit}>
                <p id="loginSubHeading">Email Address</p>
                <input className="inputFields" type="email" required
                       onChange={e => setUsername(e.target.value)}
                />
                <p id="loginSubHeading">Password</p>
                <input className="inputFields" type="password" required minLength={6} maxLength={32}
                       onChange={e => setPassword(e.target.value)}
                />
                <div>
                    {errorPresent
                        ? <Alert variant="danger" style={{textAlign: "center", marginTop: "0px", color: "red",
                            fontSize: "17px", marginLeft: "-20%", marginRight: "-20%", textTransform: "none"}}>Error : Incorrect Credentials, Try Again.</Alert>
                        : <Alert variant="success"/>
                    }
                </div>
                <button className="logButton" type="submit" disabled={isLoading}>
                    {isLoading && <i class="fas fa-spinner fa-pulse"/>}
                    {!isLoading && <p>Login</p>}
                </button>
        </form>
        
        {/* </body> */}
        </div>
        
        </div>
        <Footer/>
        </div>
    );

}

export default Login;