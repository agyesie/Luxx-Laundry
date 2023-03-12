import React from "react";
import OverlayImage from "../assets/images/borderRadiusImage.png"
import PickupButton from "../components/PickupButton";
import OverlayControlImage from "../assets/images/OverlayControlImage.png";
import OverlayProfImage from "../assets/images/OverlayProfImage.png";

const WhatWeDo = () => {
    return ( 
        <div id="WhatWeDo" className="OverlayServiceBackground">
            <div className="OverlayServiceContainer">
            <div className="leftCol">
                <img className="OverlayImage" src={OverlayImage} alt="clothing" />
            </div>
            <div className="rightCol">
                <div className="topCol">
                    <p>WHAT WE DO</p>
                    <h2>Dry Cleaning & Laundry.</h2>
                </div>
                <div className="bottomCol">
                    <div className="card">
                        <img className="OverlayCardIcon" src={OverlayControlImage} alt="" />
                        <h4>Quality Control System</h4>
                        <p>
                            Our system is designed to ensure that all of our customers receive the highest quality service
                        </p>
                    </div>
                    <div className="card">
                        <img className="OverlayCardIcon" src={OverlayProfImage} alt="" />
                        <h4>Higly Professional Staff</h4>
                        <p>
                            Our staff are experienced, knowledgeable, and friendly.
                        </p>
                    </div>
                </div>
                <PickupButton />
            </div>
        </div>
        </div>
     );
}
 
export default WhatWeDo;