import React from "react";
import "../../styles/servicesContent.css";
import ServiceKeyPoints from "../reusable/ServiceKeyPoints";
import { Link } from "react-router-dom";
import { serviceKeyPoints } from "../../utils";

function ServicesContent() {
  const keypoints = serviceKeyPoints;
  return (
    <div id="servicesContent" className="servicesContent">
      <div className="wrapper">
        <div id="_RoofingContractor" className="text-content feature">
          <p className="header">Why Choose Us</p>
          <div className="text">
            <p className="description">
              The founder of Arc Corporation opened the company to help families
              and business owners recover quickly from catastrophic storm damage
              and stay protected for the long term. Our mission has always been
              to provide top-quality roofing services that help people and
              restore the communities we serve. Over the past 20 years, our
              focus has expanded, but our mission remains the same—to help
              people like you.
            </p>
            <p className="description">
              We protect and preserve American communities one roof at a time.
              Whether you have a new construction project, are ready to upgrade
              your building’s curb appeal, or need rapid response roofing
              services following severe storms, Arc Corporation is here to help.
            </p>
          </div>
        </div>

        {/* Key Points */}
        <ServiceKeyPoints keypoints={keypoints} />

        <div id="_ArcEngineering" className="text-content">
          <p className="header">Arc Engineering</p>
          <div className="text">
            <p className="description">
              Can be hired to do an engineering diagnostic on any storm related
              project or standard project. Can build solar CADs and provide
              structural & electrical stamping
            </p>
          </div>
        </div>

        <div className="text-content withImage">
          <div className="container feature4">
            <div className="image">
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137782/Arc_Services/jlx8a87kc2wgjpj6nqqi.webp"
                }
                alt="SerImage 1"
              />
            </div>
            <div className="explanation-content">
              <p>
                Arc Engineering offers comprehensive engineering services for
                both storm-related and standard projects. Our expert team
                conducts thorough diagnostics to assess structural integrity,
                providing precise solutions tailored to your needs. From
                creating solar CADs to offering structural and electrical
                stamping, we ensure your project meets the highest standards of
                safety and efficiency. Trust Arc Engineering for reliable
                expertise and innovative solutions for your engineering needs.
              </p>
              <div className="points">
                <div className="point">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716420607/Icons/Services/yyi76ugdqymmsju3kfwn.webp"
                    }
                    alt="point 1"
                  />
                  <div className="point-text">
                    <div className="title bold">Quick & Easy</div>
                    <div className="desc">
                      We help people resume their lives as quickly and easily as
                      possible.
                    </div>
                  </div>
                </div>
                <div className="point">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716420607/Icons/Services/qk1rq8pmcj2hc1rtan74.webp"
                    }
                    alt="point 1"
                  />
                  <div className="point-text">
                    <div className="title bold">Fast & Accurate</div>
                    <div className="desc">
                      Reliable installation techniques help ensure your roof
                      recovers and endures.
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <Link to={"/Contact"}>Contact Us Now!</Link>
              </div>
            </div>
          </div>
          <div className="container inverted feature3">
            <div className="image">
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720136400/Arc_Landing_Page/Content/sxerauozxq9c5e2goofb.webp"
                }
                alt="SerImage 2"
              />
            </div>
            <div className="explanation-content">
              <p className="header">One-Click Roof</p>
              <p className="sub-header bold">
                Solar contractors can click a button and get an instant roof
                quote and install in record time.
              </p>
              <p>
                Experience the ultimate convenience with One Click Roof, a
                cutting-edge service from Arc Corporation. Designed specifically
                for solar contractors, our innovative platform provides instant
                quotes and streamlined installations, saving you time and
                resources.
              </p>
              <p>
                Forget lengthy wait times and complex processes—One Click Roof
                ensures rapid response and seamless integration at every step.
                Our dedicated team is committed to delivering exceptional
                service, ensuring your solar projects are completed efficiently
                and to the highest standards.
              </p>
            </div>
          </div>
        </div>

        <div id="_GeneralConstruction" className="text-content feature">
          <p className="header">ARC Standard & Homes</p>
          <div className="text">
            <p className="description">
              At Arc Corporation, we set the standard for excellence with Arc
              Standard. Our thorough property inspections guarantee compliance
              with solar construction standards, backed by a money-back
              guarantee. Trust us to ensure your property meets the highest
              industry standards, providing peace of mind and confidence in your
              solar construction projects. Additionally, with Arc Homes, we
              offer luxury home building and commercial property construction,
              bringing the same commitment to quality and excellence to every
              project we undertake.
            </p>
          </div>
          <div className="action">
            <Link to={"/RequestQuote"}>Get a Quote Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContent;
