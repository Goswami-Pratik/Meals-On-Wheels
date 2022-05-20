import React, { useState } from 'react'
import { LoginButton } from './LoginButton'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import {SignupButton} from "./SignupButton";
import {LogoutButton} from "./LogoutButton";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };
    let loggedInStatus = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedInStatus === true) {
        return (
            <>
                <nav className="navbar">
                    <Link to="/" className="logo" style={{marginLeft: "-15px", marginRight: "15px"}}>
                        Meals On Wheels
                    </Link>
                    <div className="icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/About" className="navbar_links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link to="/Problem" className="navbar_links" onClick={closeMobileMenu}>
                                Food Waste <i className="fas fa-caret-down"/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className="nav-item">
                            <Link to="/Donate" className="navbar_links" onClick={closeMobileMenu}>
                                Donate
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Profile/Orders" className="navbar_links" onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Signup" className="navbar_links_mobile" onClick={closeMobileMenu}>
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="navbar_links_mobile" onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Review" className="navbar_links" onClick={closeMobileMenu}>
                                Review
                            </Link>
                        </li>
                    </ul>
                    <LogoutButton/>
                </nav>
            </>
        );
    } else {
        return (
            <>
                <nav className="navbar">
                    <Link to="/" className="logo">
                        Meals On Wheels
                    </Link>
                    <div className="icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                  {/*<li className="nav-item">
                            <Link to="/Review" className="navbar_links" onClick={closeMobileMenu}>
                                Review
                            </Link>
                        </li> */}  
                    <li className="nav-item">
                            <Link to="/browse" className="navbar_links" onClick={closeMobileMenu}>
                                Browse Menu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/usercart" className="navbar_links" onClick={closeMobileMenu}>
                                Basket
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/About" className="navbar_links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link to="/Problem" className="navbar_links" onClick={closeMobileMenu}>
                                Food Waste <i className="fas fa-caret-down"/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className="nav-item">
                            <Link to="/Donate" className="navbar_links" onClick={closeMobileMenu}>
                                Donate to Help
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Profile/Orders" className="navbar_links" onClick={closeMobileMenu}
                                  style={{display: "none"}}>
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Signup" className="navbar_links_mobile" onClick={closeMobileMenu}>
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="navbar_links_mobile" onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    <SignupButton/>
                    <LoginButton/>

                </nav>
            </>
        );
    }
}

export default Navbar