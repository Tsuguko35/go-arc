import React, { useState } from "react";
import "../../styles/productGallery.css";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";

function ProductGallery() {
  return (
    <div id="productGallery" className="productGallery">
      <div className="wrapper feature4">
        <div className="text">FOLLOW US ON FACEBOOK</div>
        <div className="links">
          <Link
            to={
              "https://www.facebook.com/profile.php?id=61559432554065&mibextid=qi2Omg&rdid=kdAAkPtlpB6fv6K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F9tLwJiQk5u9Engff%2F%3Fmibextid%3Dqi2Omg"
            }
            target="_blank"
            className="icon"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="products">
          <iframe
            src="https://widgets.tagembed.com/155911?view"
            style={{ width: "100%", height: "700px", overflow: "auto" }}
            frameborder="0"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
