import React from "react";
import "../../styles/footerwithMessage.css";
import { Link } from "react-router-dom";

import * as faIcons from "react-icons/fa";
import MessageForm from "../reusable/MessageForm";

function FooterWithMessage() {
  return (
    <footer id="footerWithMessage" className="footerWithMessage">
      <div className="wrapper">
        <div className="message-container">
          <div className="background"></div>
          <div className="container">
            <div className="text-container">
              <div className="title">Need Roof Help Now?</div>
              <div className="description">
                "Experience the pinnacle of roofing excellence with our
                unparalleled craftsmanship, innovative solutions, and unwavering
                commitment to quality. Let us safeguard your property with
                integrity and precision – where every shingle tells a story of
                expertise and care."
              </div>
            </div>
            <div className="form">
              <MessageForm />
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="logo">
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716382912/ix9tfxvydepl6juho7jf.webp"
              }
              alt="logo"
            />
          </div>
          <div className="copyright">
            <p>© 2024 Arc Corporation. All rights reserved.</p>
          </div>
          <div className="socials">
            <Link
              to={
                "https://www.facebook.com/profile.php?id=61559432554065&mibextid=qi2Omg&rdid=kdAAkPtlpB6fv6K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F9tLwJiQk5u9Engff%2F%3Fmibextid%3Dqi2Omg"
              }
              target="_blank"
              className="icon-container"
            >
              <faIcons.FaFacebookF />
            </Link>
            {/* <Link
            to={"https://www.instagram.com/arcroofingcorp/"}
            target="_blank"
            className="icon-container"
          >
            <faIcons.FaInstagram />
          </Link> */}
            {/* <Link className="icon-container">
            <faIcons.FaTwitter />
          </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterWithMessage;
