import React from "react";
import Image1 from "../assets/images/1img.png"
import Image2 from "../assets/images/2img.png"
import Image3 from "../assets/images/3img.png"
import Image4 from "../assets/images/4img.png"
import Image5 from "../assets/images/5img.png"

const OurGoal = () => {
    return ( 
        <section className="ourGoalBackground" id="ourGoalBackground">
            <div className="ourGoalContainer">
                <div className="goals">
                    <div className="goalImageBox">
                        <span>OUR GOAL</span>
                        <h2>Making your life cleaner and easier.</h2>
                        <p>Your experience is tailored to fit your needs for 
                        dry cleaning and washing.</p>
                    </div>
                    <div className="goalImageBox">
                        <img className="goalImage" src={Image1} alt="" />
                    </div>
                    <div className="goalImageBox">
                        <img className="goalImage" src={Image2} alt="" />
                    </div>
                    <div className="goalImageBox">
                        <img className="goalImage" src={Image3} alt="" />
                    </div>
                    <div className="goalImageBox">
                        <img className="goalImage" src={Image4} alt="" />
                    </div>
                    <div className="goalImageBox">
                        <img className="goalImage" src={Image5} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default OurGoal;