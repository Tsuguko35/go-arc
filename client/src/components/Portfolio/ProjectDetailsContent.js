import React from "react";
import "../../styles/projectDetailsContent.css";
import RoofCarousel from "../reusable/RoofCarousel";
import { residentialItems } from "../../utils";

function ProjectDetailsContent() {
  const roofCaouselItems = residentialItems;
  return (
    <div id="projectDetailsContent" className="projectDetailsContent">
      <header>
        <div className="background">
          <img
            src="https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg"
            alt=""
          />
        </div>
        <div className="text-content">
          <p className="title">Harmony House</p>
          <p className="desc">
            where timeless elegance meets modern convenience. Nestled in a
            serene neighborhood, this single-family home epitomizes tranquility
            and sophistication.
          </p>
        </div>
      </header>
      <div className="wrapper">
        <div className="project-about">
          <p className="label">ABOUT THE PROJECT</p>
          <p className="desc">
            Welcome to Harmony House, where timeless elegance meets modern
            convenience. Nestled in a serene neighborhood, this single-family
            home epitomizes tranquility and sophistication. From its charming
            exterior to the thoughtfully designed interiors, every aspect of
            Harmony House is crafted to create a warm and inviting atmosphere.
          </p>
        </div>

        <div className="project-details">
          <div className="image">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718074033/Arc_Portfolio/Projects/t4lyqczmkzn80tfuvphx.webp"
              alt=""
            />
          </div>
          <div className="details-container">
            <p className="label">Exterior</p>
            <div className="details">
              <p className="detail">
                <span className="highlight">Architectural Design: </span>
                Harmony House features a blend of classic and contemporary
                architecture, with clean lines, large windows, and a harmonious
                color palette that complements its natural surroundings.
              </p>
              <p className="detail">
                <span className="highlight">Landscaping: </span>
                The property boasts beautifully manicured gardens, lush
                greenery, and a spacious backyard perfect for outdoor gatherings
                and relaxation.
              </p>
            </div>
          </div>
        </div>

        <div className="project-details inverted">
          <div className="image">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718074033/Arc_Portfolio/Projects/ql6npkmi3nxibravwsgt.webp"
              alt=""
            />
          </div>
          <div className="details-container">
            <p className="label">Interior</p>
            <div className="details">
              <p className="detail">
                <span className="highlight">Living Spaces: </span>
                Step inside to discover open-concept living areas filled with
                natural light. The living room, dining area, and kitchen flow
                seamlessly, creating an ideal space for family living and
                entertaining.
              </p>
              <p className="detail">
                <span className="highlight">Bedrooms: </span>
                The home includes three spacious bedrooms, each designed for
                comfort and privacy. The master suite offers a luxurious retreat
                with an en-suite bathroom and walk-in closet.
              </p>
              <p className="detail">
                <span className="highlight">Kitchen: </span>
                The modern kitchen is equipped with state-of-the-art appliances,
                ample storage, and a large island that doubles as a breakfast
                bar, making it the heart of the home.
              </p>
            </div>
          </div>
        </div>

        <div className="project-bullets">
          <p className="label">Features:</p>
          <ul>
            <li>
              Energy Efficiency: Harmony House is built with energy-efficient
              materials and features, including double-glazed windows and a
              high-efficiency HVAC system, ensuring comfort year-round.
            </li>
            <li>
              Smart Home Technology: Equipped with the latest smart home
              technology, residents can control lighting, security, and climate
              settings with ease.
            </li>
            <li>
              Sustainability: The home incorporates sustainable design elements,
              such as solar panels and rainwater harvesting systems, reflecting
              a commitment to environmental responsibility.
            </li>
          </ul>
        </div>

        <div className="project-bullets">
          <p className="label">Community:</p>
          <ul>
            <li>
              Neighborhood: Located in a peaceful and family-friendly
              neighborhood, Harmony House offers convenient access to schools,
              parks, shopping centers, and public transportation.
            </li>
            <li>
              Amenities: Residents can enjoy nearby community amenities such as
              walking trails, playgrounds, and recreational facilities.
            </li>
          </ul>
        </div>

        <div className="full-image">
          <img
            src="https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg"
            alt=""
          />
        </div>

        <p className="single-desc">
          Harmony House is more than just a home; it's a sanctuary where modern
          living and natural beauty converge, providing a perfect setting for
          creating lasting memories with loved ones.
        </p>

        <p className="single-label">Other Single-Family Home Projects</p>
        <RoofCarousel roofItems={roofCaouselItems} />
      </div>
    </div>
  );
}

export default ProjectDetailsContent;
