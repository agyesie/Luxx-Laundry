import React from "react";
import Facebook from "../assets/images/facebook.svg"
import Twitter from "../assets/images/twitter.svg"
import Google from "../assets/images/google.svg"
import Instagram from "../assets/images/instagram.svg"
import Person1 from "../assets/images/Person1.jpeg"
import Person2 from "../assets/images/Person2.jpeg"

const Staff = () => {
    return ( 
        <div className="staffBackground">
            <div className="staffContainer">
                <div className="topCol">
                    <span>LUXX LAUNDRY</span>
                    <h1>Meet Our Staff</h1>
                </div>
                <div className="personsBox">
                    <div className="person">
                        <img className="personImage" src={Person1} alt="" />
                        <div className="personDetails">
                            <h3>Kwame Ofori Takyi</h3>
                            <p>General Manager</p>
                            <div className="socialMediaIcons">
                                <img src={Facebook} alt="facebook" />
                                <img src={Twitter} alt="twitter" />
                                <img src={Google} alt="google" />
                                <img src={Instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="person">
                        <img className="personImage" src={Person2} alt="" />
                        <div className="personDetails">
                            <h3>Emmanuel Owusu Wiredu</h3>
                            <p>Operation Manager</p>
                            <div className="socialMediaIcons">
                                <img src={Facebook} alt="facebook" />
                                <img src={Twitter} alt="twitter" />
                                <img src={Google} alt="google" />
                                <img src={Instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Staff;