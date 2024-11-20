import React from "react";
import "../../styles/servicesHeader.css";
import QouteForm from "../reusable/QouteForm";
import { Link } from "react-router-dom";

function ServicesHeader() {
  return (
    <div id="servicesHeader" className="servicesHeader">
      <div id="_getQuote" className="wrapper">
        <header className="header">
          <div className="background">
            <div className="overlay"></div>
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137782/Arc_Services/rqilrm2v4efymxrpubse.webp"
              }
              alt=""
            />
          </div>
          <div className="header-content">
            <div className="text-content start-fade-bottom">
              <p className="title">Roofing Services</p>
              <div className="description">
                Arc Corporation provides top-quality roofing services for
                property owners across the Southeastern United States. We are
                ranked as a leading roofing company and have been entrusted to
                help build and restore communities one roof at a time.
              </div>
              <div className="key-points">
                <div className="point">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716419845/Arc_Services/sx9c4jrsdt07zbhujrax.webp"
                    }
                    alt="Key point"
                  />
                  <p>One Click Roof</p>
                </div>
                <div className="point">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716419845/Arc_Services/sx9c4jrsdt07zbhujrax.webp"
                    }
                    alt="Key point"
                  />
                  <p>General Construction</p>
                </div>
                <div className="point">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716419845/Arc_Services/sx9c4jrsdt07zbhujrax.webp"
                    }
                    alt="Key point"
                  />
                  <p>Arc Engineering & Standard</p>
                </div>
              </div>
              <div className="actions start-flip-top">
                <Link to={"/Services/Commercial"}>Commercial</Link>
                <Link to={"/Services/Residential"}>Residential</Link>
              </div>
            </div>
            <div className="form">
              <QouteForm />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default ServicesHeader;
