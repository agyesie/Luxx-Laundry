import React from "react";
import Phone from "../assets/images/phone.png"

const Contact = () => {
    return ( 
        <div className="navContactBox">
            <div className="navContact">
                <img className="phoneImg" src={Phone} alt="" />
                <div className="navContactDetails">
                    <span className="contactTitle">Open Hours</span>
                    <span className="contactSpan">24 Hours Everyday</span>
                </div>
            </div>
            <div className="navContact">
                <img className="phoneImg" src={Phone} alt="" />
                <div className="navContactDetails">
                    <span className="contactTitle">Call Us</span>
                    <span className="contactSpan">0540980458</span>
                    <span className="contactSpan">0594607997</span>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;