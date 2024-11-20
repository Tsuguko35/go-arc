import React from "react";
import "../../styles/contactUsBanner.css";
import { Link } from "react-router-dom";

function ContactUsBanner() {
  return (
    <div id="contactUsBanner" className="contactUsBanner">
      <div className="wrapper">
        <div className="container">
          <div className="text">
            <p>Contact Us Here</p>
            <p>
              Write your concern to us and our specialist will get back to you.
            </p>
          </div>
          <Link to={"/Contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUsBanner;
