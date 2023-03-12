import React from "react";
import Logo from "../components/Logo";
import Navlinks from "../components/Navlinks";
import Contact from "../components/Contact";
import PickupButton from "../components/PickupButton";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Logo />
            <Navlinks />
            <Contact />
            <PickupButton />
        </nav>
    );
}
 
export default Navbar;
