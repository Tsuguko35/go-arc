import React from "react";
import "../../styles/portfolioContent.css";
import ServiceKeyPoints from "../reusable/ServiceKeyPoints";
import { portfolioKeyPoints } from "../../utils";
import { Link } from "react-router-dom";

function PortfolioContent() {
  const keypoints = portfolioKeyPoints;
  const project =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423355/Arc_Portfolio/eqzqqxmgbhgnsxedob4d.webp";
  return (
    <div id="portfolioContent" className="portfolioContent">
      <div className="wrapper">
        <div id="_Services" className="text-content start-fade-bottom">
          <p className="title">Services</p>
          <p className="description">
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>

        {/* Key Points */}
        <ServiceKeyPoints keypoints={keypoints} />

        <div id="_Projects" className="projects-container feature3">
          <p className="title">Projects</p>
          <div className="project-grid">
            <Link to={`/Portfolio/Projects/Residential`} className="project">
              <div className="overlay"></div>
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720135760/Arc_Landing_Page/Content/e13zujp5nz3yjqzzucjh.webp"
                }
                alt=""
              />
              <div className="text-content">
                <p className="title">Residential Projects</p>
                {/* <p className="sub">14 Projects</p> */}
              </div>
            </Link>
            <Link to={`/Portfolio/Projects/Commercial`} className="project">
              <div className="overlay"></div>
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720135759/Arc_Landing_Page/Content/c8bruyxke0rwufavhiu2.webp"
                }
                alt=""
              />
              <div className="text-content">
                <p className="title">Commercial Projects</p>
                {/* <p className="sub">8 Projects</p> */}
              </div>
            </Link>
          </div>
          {/* <p className="load-more">Browse more.</p> */}
        </div>

        <div id="_Statistics" className="company-skills feature">
          <div className="label">
            <div className="title">Core Construction Skills</div>
            <div className="desc">
              ARC Solutions stands out as a leader in the roofing industry, with
              top-tier skills in innovation, sustainability, quality
              craftsmanship, and customer service. Their commitment to
              excellence and environmental responsibility makes them a trusted
              and forward-thinking partner for any roofing project.
            </div>
          </div>
          <div className="skills-grid">
            <div className="skill">
              <span className="skill-name">Innovation</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "96%" }}></div>
                </div>
                <span className="percentage">96%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Customer Service</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "95%" }}></div>
                </div>
                <span className="percentage">95%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Sustainability</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "98%" }}></div>
                </div>
                <span className="percentage">98%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Project Management</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "99%" }}></div>
                </div>
                <span className="percentage">99%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Quality Craftsmanship</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "97%" }}></div>
                </div>
                <span className="percentage">97%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Safety Standards</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
                <span className="percentage">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContent;
