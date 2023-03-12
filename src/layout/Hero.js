import React from "react";

const Hero = () => {
    return ( 
        <main id="Home" className="hero">
            <div className="heroTextContainer">
                <ul>
                    <li>PICKUP</li>
                    <li>CLEAN</li>
                    <li>DELIVER</li>
                </ul>

                <h1>
                    Introducing <br />
                    Luxx Laundry <br />
                    Services
                </h1>

                <div className="heroBtns">
                    <button className="heroBtn">
                        Who We Are
                    </button>
                    <button className="heroBtn">
                        Pricing
                    </button>
                </div>

                <p>
                    Same Day Collection <br />
                    Cashless Payments <br />
                    Dedicated 24/7 Support.
                </p>
            </div>
        </main>
     );
}
 
export default Hero;