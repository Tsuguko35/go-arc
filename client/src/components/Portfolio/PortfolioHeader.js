import React from "react";
import "../../styles/portfolioHeader.css";

function PortfolioHeader() {
  return (
    <div id="portfolioHeader" className="portfolioHeader">
      <div className="background">
        <div className="overlay"></div>
        <img
          src={
            "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720140116/Arc_Portfolio/cgmqhwyywultv9oessxe.webp"
          }
          alt="Portfolio Header"
        />
      </div>
      <div className="wrapper">
        <div className="text-content start-fade-bottom">
          <div className="title">Project Portfolio</div>
          <div className="description">
            Explore our diverse project portfolio showcasing Arc Corporation's
            expertise across residential, commercial, and specialty roofing
            projects. From stunning residential installations to large-scale
            commercial ventures, each project exemplifies our commitment to
            quality craftsmanship and customer satisfaction. Dive into our
            portfolio to discover the superior results we deliver to clients
            across the Southeastern United States.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioHeader;
