import React from "react";
import { Link } from "react-scroll";

const Navlinks = () => {
    return ( 
        <ul className="navItems">
            <li>
                <Link to="Home" spy={true} smooth={true} offset={100} duration={500}>Home</Link>
            </li>
            <li>
                <Link to="CommercialService" spy={true} smooth={true} offset={-100} duration={500}>Our Pricing</Link>
            </li>
            <li>
                <Link to="WhatWeDo" spy={true} smooth={true} offset={0} duration={500}>About Us</Link>
            </li>
            <li>
                <Link to="CommercialService" spy={true} smooth={true} offset={50} duration={500}>Services</Link>
            </li>
        </ul>
     );
}
 
export default Navlinks;