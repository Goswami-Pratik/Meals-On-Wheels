import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export function LoginButton() {
    return(
        <Link to="/Login">
            <button className="login-button">Login </button>
        </Link>
    );
}