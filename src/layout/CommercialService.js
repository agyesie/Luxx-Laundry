import React from "react";
import LaundryImage from "../assets/images/laundry-machine.png"

const CommercialService = () => {
    return ( 
        <div id="CommercialService" className="mainCommercialServiceBackground">
            <div className="CommercialServiceBackground">
            </div>
                <div className="CommercialService">
                    <h2>Commercial Services</h2>
                    <div className="CommercialServiceCards">
                            <div className="card">
                                <img className="CommercialServiceCardIcon" src={LaundryImage} alt="" />
                                <p>Airbnb <br /> Laundry Service</p>
                            </div>
                            <div className="card">
                                <img className="CommercialServiceCardIcon" src={LaundryImage} alt="" />
                                <p>Hotel <br /> Laundry Service</p>
                            </div>
                            <div className="card">
                                <img className="CommercialServiceCardIcon" src={LaundryImage} alt="" />
                                <p>Work wear <br /> Laundry Service</p>
                            </div>
                            <div className="card">
                                <img className="CommercialServiceCardIcon" src={LaundryImage} alt="" />
                                <p>Gyms & Spa <br /> Laundry Service</p>
                            </div>
                            <div className="card">
                                <img className="CommercialServiceCardIcon" src={LaundryImage} alt="" />
                                <p>Restaurant <br /> Laundry Service</p>
                            </div>
                            <div className="card">
                                <img className="CommercialServiceCardIcon" src={LaundryImage} alt="" />
                                <p>Event <br /> Laundry Service</p>
                            </div>
                            <div className="card">
                                <img className="CommercialServiceCardIcon" src={LaundryImage} alt="" />
                                <p>Medical <br /> Laundry Service</p>
                            </div>
                    </div>
                </div>
        </div>
     );
}
 
export default CommercialService;