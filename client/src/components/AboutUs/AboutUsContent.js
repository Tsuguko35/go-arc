import React from "react";
import "../../styles/aboutUsContent.css";

import { Link } from "react-router-dom";

function AboutUsContent() {
  const william =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423796/Arc_About/e0kaorobafb6s3k4mj2z.webp";
  const amanda =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423796/Arc_About/lwokbhx9ghqn7cje33i7.webp";
  const bill =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423796/Arc_About/jwlu6gicurobfeeimrzm.webp";
  const hero_image =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423796/Arc_About/dpu6jeylhevua4nnpmcn.webp";
  const about_Icon =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424077/Icons/About/peozk7gfwol8rliux20q.webp";
  const hero_Icon =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424077/Icons/About/oqsnodl7cn3ofvggw8jb.webp";
  const hero_card_icon1 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424076/Icons/About/eatugzzzc14i4ajncfyu.webp";
  const hero_card_icon2 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424076/Icons/About/bhx1ax8yl9juu9x9fxdk.webp";
  const hero_card_icon3 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424076/Icons/About/xxeliwojlfiwv5xawhej.webp";

  return (
    <div id="aboutUsContent" className="aboutUsContent">
      <div className="wrapper">
        <div id="_OurCompany" className="about-details feature4">
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720136717/Arc_Landing_Page/Content/xzgmmuctdth0cymxgifa.webp"
              }
              alt=""
            />
          </div>
          <div className="company-details">
            <div className="label">
              <img src={about_Icon} alt="" />
              <p>About Us</p>
            </div>
            <div className="overview-container">
              <p className="title">Our Company Overview</p>
              <p className="company-description">
                Arc Corporation is a premier provider of construction and
                roofing services in the Southeastern United States. Our
                expertise spans residential and commercial roofing, luxury home
                building, and commercial property development.
              </p>
              <div className="actions">
                <Link className="active">Company</Link>
                <Link to={"/Services"}>Services</Link>
                <Link to={"/About#_Team"}>Our Team</Link>
              </div>
            </div>
            <div className="description">
              We offer specialized services such as One Click Roof for instant
              solar roofing quotes, Arc Engineering for thorough diagnostics,
              and Arc Standard for guaranteed property inspections. Committed to
              excellence and innovation, Arc Corporation ensures top-quality
              craftsmanship and exceptional customer satisfaction in every
              project.
            </div>
            {/* <div className="action">
              <p>Learn More.</p>
            </div> */}
          </div>
        </div>

        <div id="_Team" className="team-details">
          <p className="label">Meet The Team</p>
          <div className="team-member feature3">
            <div className="image">
              <img src={william} alt="" />
            </div>
            <div className="member-details">
              <div className="name-position">
                <p className="name">William Beliles</p>
                <p className="position">Chief Executive Officer</p>
              </div>
              <p className="description">
                Meet William Beliles, our visionary CEO leading Genesis Solar
                Power with a profound dedication to innovative and sustainable
                energy solutions. His strategic vision drives our company to the
                forefront of the solar energy industry, inspiring us to
                revolutionize the energy landscape and deliver exceptional solar
                power services to our customers
              </p>
              {/* <div className="action">
                <Link to={"/About/Profile/WilliamBeliles"}>Learn More.</Link>
              </div> */}
            </div>
          </div>

          <div className="team-member inverted feature4">
            <div className="image">
              <img src={amanda} alt="" />
            </div>
            <div className="member-details">
              <div className="name-position">
                <p className="name">Amanda Beliles</p>
                <p className="position">President</p>
              </div>
              <p className="description">
                Meet Amanda Beliles, a passionate nurse for 12 years, a
                dedicated mom to four girls, and a wife and business partner,
                She finds a fulfillment in merging her role. She engage with the
                community as a PTO board member at her daughters' school and
                delve into solar energy beyond healthcare. Witnessing solar's
                impact on savings in administration, She embraced both roles for
                their flexibility. Her goal is conserve energy for a better
                Earth and guide others on their solar journey.
              </p>
              {/* <div className="action">
                <Link to={"/About/Profile/WilliamBeliles"}>Learn More.</Link>
              </div> */}
            </div>
          </div>

          <div className="team-member feature3">
            <div className="image">
              <img src={bill} alt="" />
            </div>
            <div className="member-details">
              <div className="name-position">
                <p className="name">Bill Hicks</p>
                <p className="position">
                  Senior Vice President of Sales & Marketing
                </p>
              </div>
              <p className="description">
                Bill Hicks is an accomplished sales and marketing executive with
                extensive experience across multiple industries. Currently
                serving as the SVP of Sales & Marketing for Eden HVAC & Home
                Efficiency, ARC Corporation, and Genesis Solar Power, Bill
                operates remotely from Montana, where he leverages his expertise
                to enhance comfort, maximize efficiency, and drive
                industry-leading solutions. His strategic leadership at Genesis
                Solar Power ensures comprehensive excellence in solar EPC
                services. Additionally, Bill contributes his skills to Sojourner
                International Inc. as a Director/Board Member, supporting
                community-focused initiatives locally and globally. Bill's
                dedication to transforming environments, safeguarding
                investments, and fostering sustainability underscores his
                commitment to making a positive impact in every role he
                undertakes.
              </p>
              {/* <div className="action">
                <Link to={"/About/Profile/WilliamBeliles"}>Learn More.</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div id="_Dealer" className="hero">
        <div className="background">
          <div className="overlay"></div>
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1720135759/Arc_Landing_Page/Content/c8bruyxke0rwufavhiu2.webp"
            }
            alt=""
          />
        </div>
        <div className="wrapper">
          <div className="hero-content">
            <div className="hero-message">
              <div className="label">
                <img src={hero_Icon} alt="" />
                <p>ARC Production</p>
              </div>
              <div className="text-content">
                <p className="title">Do you want to be a dealer?</p>
                <p className="desc">
                  Our partner Solar Powur ON, offers the most competitive prices
                  in the industry. With a national install partner Genesis Solar
                  Power to help you turn your solar Powur ON! Our mission is to
                  provide lasting savings and quality products for your peace of
                  mind. Explore our options and make informed decisions for your
                  solar system.
                </p>
                <div className="action">
                  <Link to={"/Contact"}>Message Us Now!</Link>
                </div>
              </div>
            </div>
            <div className="hero-cards">
              <div className="card">
                <img src={hero_card_icon1} alt="" />
                <p>High Quality Product</p>
              </div>
              <div className="card">
                <img src={hero_card_icon2} alt="" />
                <p>Competitive Savings</p>
              </div>
              <div className="card">
                <img src={hero_card_icon3} alt="" />
                <p>Saving Protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsContent;
