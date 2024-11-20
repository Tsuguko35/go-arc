import React from "react";
import "../../styles/aboutUsHeader.css";
import { Link } from "react-router-dom";

function AboutUsHeader() {
  return (
    <div id="aboutUsHeader" className="aboutUsHeader">
      <div className="wrapper">
        <header className="header">
          <div className="background">
            <div className="overlay"></div>
            <div className="light"></div>
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720135760/Arc_Landing_Page/Content/e13zujp5nz3yjqzzucjh.webp"
              }
              alt=""
            />
          </div>
          <div className="header-content start-fade-bottom">
            <div className="title">
              <p>What is ARC Corporation</p>
              <p>how valid are we?</p>
            </div>
            <div className="description">
              Arc Corporation delivers top-quality construction and roofing
              services across the Southeastern United States. We specialize in
              residential and commercial roofing, luxury home building, and
              commercial property development. Our unique offerings include One
              Click Roof for instant solar roofing quotes, Arc Engineering for
              comprehensive diagnostics, and Arc Standard for guaranteed
              property inspections. Trust Arc Corporation for excellence,
              innovation, and customer satisfaction in every project
            </div>
            <div className="actions start-flip-top">
              <Link to={"/Services"} className="filled">
                See Services
              </Link>
              <Link to={"/Contact"}>Contact Us</Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default AboutUsHeader;
