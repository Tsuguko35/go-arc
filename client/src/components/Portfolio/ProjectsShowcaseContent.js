import React from "react";
import "../../styles/projectsShowcaseContent.css";
import { Link } from "react-router-dom";

function ProjectsShowcaseContent() {
  return (
    <div id="projectsShowcaseContent" className="projectsShowcaseContent">
      <div className="wrapper">
        <div className="header">
          <p className="title">Single-Family Homes</p>
          <p className="desc">
            Single family homes are often found in neighborhoods or out in the
            country. These homes can have small yards, or enough green space to
            include a few farm animals, depending on where they are located.
          </p>
        </div>

        <div className="projects-grid">
          <Link
            to={`/Portfolio/Projects-Showcase/Details/SerenityHaven`}
            className="project"
          >
            <div className="background">
              <div className="overlay"></div>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/urdgdtidlwrd1q2etfgh.webp"
                alt="project image"
              />
            </div>
            <p className="label">Serenity Haven</p>
          </Link>
          <Link
            to={`/Portfolio/Projects-Showcase/Details/SerenityHaven`}
            className="project"
          >
            <div className="background">
              <div className="overlay"></div>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/urdgdtidlwrd1q2etfgh.webp"
                alt="project image"
              />
            </div>
            <p className="label">Tranquil Retreat</p>
          </Link>
          <Link
            to={`/Portfolio/Projects-Showcase/Details/SerenityHaven`}
            className="project"
          >
            <div className="background">
              <div className="overlay"></div>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/urdgdtidlwrd1q2etfgh.webp"
                alt="project image"
              />
            </div>
            <p className="label">Maplewood Residence</p>
          </Link>
          <Link
            to={`/Portfolio/Projects-Showcase/Details/SerenityHaven`}
            className="project"
          >
            <div className="background">
              <div className="overlay"></div>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/urdgdtidlwrd1q2etfgh.webp"
                alt="project image"
              />
            </div>
            <p className="label">Blue Sky Bungalow</p>
          </Link>
          <Link
            to={`/Portfolio/Projects-Showcase/Details/SerenityHaven`}
            className="project"
          >
            <div className="background">
              <div className="overlay"></div>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/urdgdtidlwrd1q2etfgh.webp"
                alt="project image"
              />
            </div>
            <p className="label">Harmony House</p>
          </Link>
          <Link
            to={`/Portfolio/Projects-Showcase/Details/SerenityHaven`}
            className="project"
          >
            <div className="background">
              <div className="overlay"></div>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/urdgdtidlwrd1q2etfgh.webp"
                alt="project image"
              />
            </div>
            <p className="label">Whispering Pines</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsShowcaseContent;
