import React from "react";
import WashingIcon from "../assets/images/washing.png"
import DryCleaningIcon from "../assets/images/drycleaning.png"
import IroningIcon from "../assets/images/ironing.png"
import IroningBoardIcon from "../assets/images/ironing-board.png"
import LaundryMachineIcon from "../assets/images/laundry-machine.png"

const UniqueSolutions = () => {
    return ( 
        <div className="UniqueSolutionsBackground">
            <div className="UniqueSolutionsContainer">
                <h1>Unique solutions <br /> for all your laundry needs</h1>
                <div className="uniqueSolutionCards">
                    <div className="uniqueSolutionCard">
                        <div className="imageBox">
                            <img className="uniqueSolutionCardIcon" src={WashingIcon} alt="" />
                        </div>
                        <div className="cardDetails">
                            <h4>Laundry Service</h4>
                            <p>
                                We offer a full range of laundry services for both residential and commercial customers. We wash, dry and iron. 
                            </p>
                        </div>
                    </div>
                    <div className="uniqueSolutionCard">
                        <div className="imageBox">
                            <img className="uniqueSolutionCardIcon" src={DryCleaningIcon} alt="" />
                        </div>
                        <div className="cardDetails">
                            <h4>Dry Cleaning</h4>
                            <p>
                            While offering you outstanding service and time-saving choices, we keep you looking your best by giving your formal wear and business attire the best clean they've ever received.
                            </p>
                        </div>
                    </div>
                    <div className="uniqueSolutionCard">
                        <div className="imageBox">
                            <img className="uniqueSolutionCardIcon" src={IroningIcon} alt="" />
                        </div>
                        <div className="cardDetails">
                            <h4>Wash & Iron</h4>
                            <p>
                            It  includes a wash, dry and iron service. This service is offered for items such as shirts, pants, skirts, and other clothing items. 
                            </p>
                        </div>
                    </div>
                    <div className="uniqueSolutionCard">
                        <div className="imageBox">
                            <img className="uniqueSolutionCardIcon" src={IroningBoardIcon} alt="" />
                        </div>
                        <div className="cardDetails">
                            <h4>Ironing Service</h4>
                            <p>
                            This  Package from our Laundromat ensures that your clothes look their best. It includes steaming, pressing cloth, and ironing for a protective layer for your fabric.
                            </p>
                        </div>
                    </div>
                    <div className="uniqueSolutionCard">
                        <div className="imageBox">
                            <img className="uniqueSolutionCardIcon" src={LaundryMachineIcon} alt="" />
                        </div>
                        <div className="cardDetails">
                            <h4>Household LaundryService</h4>
                            <p>
                            Whether you need a one-time service or ongoing care for your household laundry, we’ve got you covered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UniqueSolutions;