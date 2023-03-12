import React from "react";
import Logo from "../components/Logo";
import phoneImg from "../assets/images/phone-solid.svg";
import locationDot from "../assets/images/location-dot-solid.svg";
import envelope from "../assets/images/envelope-solid.svg";

const Footer = () => {
  return (
    <section className="footerContent">
      <div className="footerElementsContainer">
        <div className="footerElements">
          <h3>Contact Us</h3>
          <ul className="footerItems">
            <li>
              <img src={locationDot} className="AwesomeIcons" alt="locationSVG" />
              <span>Jubilee Mall, KNUSTCommercial Area</span>
            </li>
            <li>
              <img src={phoneImg} className="AwesomeIcons" alt="phoneSVG" />
              <span>0594607997/0540980458</span>
            </li>
            <li>
              <img src={envelope} className="AwesomeIcons" alt="envelopeSVG" />
              <span>info@luxxlaundry.com</span>
            </li>
          </ul>
        </div>
        <div className="footerElements">
          <h3>Useful Link</h3>
          <ul className="footerItems">
            <li>About Us</li>
            <li>Team</li>
            <li>Testimonial</li>
            <li>Service</li>
          </ul>
        </div>
        <div className="footerElements">
          <h3>Recent Post</h3>
          <ul className="footerItems">
            <li>Laundry made simple at Luxx laundry</li>
            <li>Laundry for campus students</li>
          </ul>
        </div>
        <div className="footerElements">
          <h3>Services</h3>
          <ul className="footerItems">
            <li>Dry Cleaning</li>
            <li>Wash & Fold</li>
            <li>Pickup & Delivery</li>
            <li>College Laundry</li>
          </ul>
        </div>
      </div>
      <div className="copyrightFooter">
        <div className="footerLogo">
          <Logo />
        </div>
        <p>
          &copy; luxx laundry {new Date().getFullYear()} | all rights reserved
        </p>
        <ul className="Socials">
          <li>FaceBook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
