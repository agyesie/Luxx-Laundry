import React from "react";
import luxxLogo from "../assets/images/luxx-logo.png"
import { Link } from "react-scroll";
const Logo = () => {
    return ( 
        <div className="logoBox">
            <Link to="Home" spy={true} smooth={true} offset={100} duration={500}>
            <img className="logo" src={luxxLogo} alt="company logo" />
            </Link>
        </div>
     );
}
 
export default Logo;