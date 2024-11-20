import React from "react";
import "../../styles/landingPageContent.css";

import { Link } from "react-router-dom";
import PortfolioHighlights from "../reusable/PortfolioHighlights";
import ProductGallery from "../reusable/ProductGallery";
import LandingPageProdAndSer from "./LandingPageProdAndSer";

function LandingPageContent() {
  return (
    <div id="landingPageContent" className="landingPageContent">
      <div className="wrapper">
        <div className="company-description feature3">
          <div className="left">
            <p className="title">
              What is <span style={{ color: "#D6AE30" }}>ARC Solutions?</span>
            </p>
            <div className="paragraphs">
              <p>
                <span className="bold">ARC Solutions</span> stands out as a
                trailblazer, revolutionizing roofing with a blend of innovation
                and sustainability.Through advanced technology and data-driven
                insights, ARC Solutions ensures precision engineering from
                consultation to completion.
              </p>
              <p>
                Committed to environmental stewardship, they lead the charge in
                Eco-friendly roofing materials and practices, forging a path
                towards a greener future.Their unwavering dedication to quality
                and personalized service has earned them the trust of clients
                nationwide, setting the standard for excellence in the field.
              </p>
              <p>
                As they continue to push boundaries and redefine industry norms,
                ARC Solutions remains at the forefront, shaping the future of
                roofing with every project they undertake.
              </p>
            </div>
            <div className="action">
              <Link to={"/About"}>Learn more.</Link>
            </div>
          </div>
          <div className="right">
            <div className="container">
              <div className="with-overlay-holder">
                <div className="img-overlay">
                  <div className="overlay"></div>
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720135144/Arc_Landing_Page/Content/sfgx4hq66auucsxmegxa.webp"
                    }
                    alt="company 1"
                    className="with-overlay"
                  />
                </div>
              </div>

              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720135144/Arc_Landing_Page/Content/idgxmajyce52lhqmw9mz.webp"
                }
                alt="company 2"
                className="clear"
              />
            </div>
          </div>
        </div>
      </div>

      <LandingPageProdAndSer />

      <div className="stat-counter">
        <div className="stat feature5">
          <p>98%</p>
          <p>Satisfaction rate comes from our awesome customers.</p>
        </div>
        <div className="stat feature5">
          <p>4.9/5.0</p>
          <p>Average customer ratings we have got all over internet.</p>
        </div>
      </div>

      <div className="company-feature">
        <div className="image">
          <img
            src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720136967/Arc_Landing_Page/Content/ustjyrvi8mesckbwlpq0.webp"
            alt="company-feature"
          />
        </div>
        <div className="description ">
          <div className="content feature4">
            <p className="title">Arc Engineering</p>
            <p className="desc">
              Arc Engineering offers comprehensive engineering services for both
              storm-related and standard projects. Our expert team conducts
              thorough diagnostics to assess structural integrity, providing
              precise solutions tailored to your needs.{" "}
            </p>
            <p className="desc">
              From creating solar CADs to offering structural and electrical
              stamping, we ensure your project meets the highest standards of
              safety and efficiency. Trust Arc Engineering for reliable
              expertise and innovative solutions for your engineering needs.
            </p>
            <div className="action">
              <Link to={"/Services"}>Inquire Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        {/* Portfolio Highlights */}
        <PortfolioHighlights />
      </div>

      {/* ProductGallery */}
      <ProductGallery />
    </div>
  );
}

export default LandingPageContent;
