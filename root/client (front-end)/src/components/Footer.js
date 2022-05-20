import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className= "footer">
            
<div className = "social-icons">
<AiOutlineInstagram className = "instaLogo iconz"/>
<AiOutlineTwitter className = "twitLogo iconz"/>
<GrLinkedinOption className = "lnLogo iconz"/>
<FiFacebook className = "fbLogo iconz"/>
</div>
<div className= "underSection">
<ul className = "info">
<Link to ="/About"  >
 About
 </Link>
 <Link to ="/Waste"  >
 Food Waste
 </Link>
 <Link to ="/About"  >
 Help Us
 </Link>
 <Link to ="/Donate"  >
 Donate
 </Link>
</ul>
<ul className = "terms">
<Link to ="/T&C"  >
 T&C
 </Link>
 <Link to ="/FAQ"  >
 FAQ
 </Link>
 <Link to ="/Contact"  >
 Contact Us
 </Link>
 <Link to ="/Ppolicy"  >
 Privacy Policy
 </Link>
</ul>
</div>
</div>

        )
}

export default Footer;