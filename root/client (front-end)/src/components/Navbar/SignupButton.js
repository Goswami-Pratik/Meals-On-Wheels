import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export function SignupButton() {
    return(
        <Link to="/Signup">
            <button className="signup-button">Signup </button>
        </Link>
    );
}