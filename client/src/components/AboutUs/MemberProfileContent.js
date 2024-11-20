import React from "react";
import "../../styles/memberProfileContent.css";

import { Link } from "react-router-dom";

import * as GoIcons from "react-icons/go";

function MemberProfileContent() {
  return (
    <div id="memberProfileContent" className="memberProfileContent">
      <div className="wrapper">
        <div className="member-profile">
          <div className="member-details">
            <div className="member-image">
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                }
                alt="Member profile"
              />
            </div>
            <div className="details">
              <div className="name-position">
                <p className="name">William Beliles</p>
                <p className="position">Chief Executive Officer</p>
              </div>
              <div className="personal-details">
                <p className="summary">
                  Meet William Beliles, our visionary CEO leading Genesis Solar
                  Power with a profound dedication to innovative and sustainable
                  energy solutions. His strategic vision drives our company to
                  the forefront of the solar energy industry, inspiring us to
                  revolutionize the energy landscape and deliver exceptional
                  solar power services to our customers
                </p>
                <div className="contact-infos">
                  <div className="contact">
                    <p className="label">Contact Details</p>
                    <p className="contact-detail link">
                      https://www.linkedin.com/in/william-beliles-5b747a10b +090
                      4057 1667
                    </p>
                  </div>
                  <div className="contact">
                    <p className="label">Address</p>
                    <p className="contact-detail">
                      458 Old york Court hamington station, ny 11746
                    </p>
                  </div>
                  <div className="contact">
                    <p className="label">Social Media</p>
                    <div className="contact-detail links">
                      <Link>
                        Facebook{" "}
                        <span className="link-arrow">
                          <GoIcons.GoArrowUpRight />
                        </span>
                      </Link>
                      <Link>
                        Twitter{" "}
                        <span className="link-arrow">
                          <GoIcons.GoArrowUpRight />
                        </span>
                      </Link>
                      <Link>
                        LinkedIn{" "}
                        <span className="link-arrow">
                          <GoIcons.GoArrowUpRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="member-skills">
            <div className="label">
              <div className="title">SKILLS</div>
              <div className="sub">Skills · Certificate</div>
            </div>
            <div className="skills">
              <div className="skill">
                <p className="skill-number">01</p>
                <p className="skill-name">Business Development</p>
                <p className="skill-desc">
                  Skilled in identifying growth opportunities, expanding market
                  presence, and building strategic partnerships that contribute
                  to the company's robust business growth.
                </p>
              </div>
              <div className="skill">
                <p className="skill-number">02</p>
                <p className="skill-name">Team Building and Leadership</p>
                <p className="skill-desc">
                  Expert in building, mentoring, and leading high-performing
                  teams, cultivating an environment of collaboration,
                  motivation, and excellence.
                </p>
              </div>
              <div className="skill">
                <p className="skill-number">03</p>
                <p className="skill-name">Renewable Energy Solutions</p>
                <p className="skill-desc">
                  Possesses extensive expertise in developing and implementing
                  cutting-edge sustainable energy systems, ensuring that Genesis
                  Solar Power remains at the forefront of the renewable energy
                  sector.
                </p>
              </div>
              <div className="skill">
                <p className="skill-number">04</p>
                <p className="skill-name">
                  Market Analysis & Trend Forecasting
                </p>
                <p className="skill-desc">
                  Proficient in analyzing market data, understanding industry
                  trends, and forecasting future developments to inform
                  strategic planning and innovation efforts, keeping the company
                  competitive and forward-thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberProfileContent;
