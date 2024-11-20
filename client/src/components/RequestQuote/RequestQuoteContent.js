import React from "react";
import "../../styles/requestQuoteContent.css";

import * as io5ICons from "react-icons/io5";
import QouteForm from "../reusable/QouteForm";
import { Link } from "react-router-dom";

function RequestQuoteContent() {
  return (
    <div id="requestQuoteContent" className="requestQuoteContent">
      <div className="wrapper">
        <div className="background">
          <div className="overlay"></div>
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720135144/Arc_Landing_Page/Content/sfgx4hq66auucsxmegxa.webp"
            }
            alt="background"
          />
        </div>
        <div className="request-quote">
          <div className="container">
            <div className="text-content start-fade-bottom">
              <div className="header">
                <p>Your Custom Quote, Just a Few Clicks Away!</p>
              </div>
              <div className="cards">
                {/* Card */}
                <div className="card">
                  <div className="image">
                    <img
                      src={
                        "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716419326/Icons/hljlbksklkq9le00ubqc.webp"
                      }
                      alt="Commercial"
                    />
                  </div>
                  <p className="title">Commercial Services</p>
                  <div className="services">
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>Leak Repair</p>
                    </div>
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>Roof Replacement</p>
                    </div>
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>New Roof Construction</p>
                    </div>
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>Maintenance Agreements</p>
                    </div>
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>National Accounts</p>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="card">
                  <div className="image">
                    <img
                      src={
                        "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716419324/Icons/opfsemfweyckwud683rq.webp"
                      }
                      alt="Residential"
                    />
                  </div>
                  <p className="title">Residential Services</p>
                  <div className="services">
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>Roof Repair & Replacement</p>
                    </div>
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>Siding Repair & Replacement</p>
                    </div>
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>Gutters</p>
                    </div>
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>Windows</p>
                    </div>
                    <div className="service">
                      <io5ICons.IoCheckmarkOutline />
                      <p>Doors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form">
              <QouteForm />
            </div>
          </div>
        </div>
        <div className="black-strip">
          <div className="container">
            <div className="text-content">
              <div className="icon">
                <img
                  src={
                    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716419325/Icons/qllgusmh04722e3axjwj.webp"
                  }
                  alt="Storm"
                />
              </div>
              <div className="text">
                <p className="header">Severe Storm Center</p>
                <p className="description">
                  With resources all across the FL, United States, Arc Roofing
                  Corporation is positioned to help your home or business in the
                  aftermath of a large scale or isolated severe weather event.
                </p>
              </div>
            </div>
            <div className="action">{/* <Link>Learn More.</Link> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestQuoteContent;
