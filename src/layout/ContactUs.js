import React from "react";
import Checkbox from "@mui/material/Checkbox";

const ContactUs = () => {
  return (
    <div id="Contact" className="mainContactBackground">
      <div className="ContactBackground">
        <div className="formContent">
          <div className="headersDivision">
            <h3>CONTACT US</h3>
            <h2>
              Have Questions? <br />
              Get in Touch!
            </h2>
          </div>
          <form className="formBox">
            <div className="inputField">
              <input type="text" placeholder="Full Name" />
              <input type="number" placeholder="Phone Number" />
            </div>
            <div className="inputField">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea name="" placeholder="Message" id=""></textarea>
            <div className="submitSend">
              <div className="checkboxSide">
                {/* <input type="checkbox" name="" id="" /> */}
                <Checkbox
                  defaultChecked
                  color="default"
                  size="small"
                  sx={{
                    padding: 0,
                    paddingRight: 1,
                  }}
                />
                <span>Also subscribe us</span>
              </div>

              <button>Send</button>
            </div>
          </form>
        </div>
      <div className="emailSubscription">
        <h3>Enter Your Mail To Subscribe</h3>
        <div className="emailBox">
          <input type="email" placeholder="Email Address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
