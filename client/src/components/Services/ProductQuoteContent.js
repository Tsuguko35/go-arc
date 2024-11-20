import React from "react";
import "../../styles/productQuote.css";
import { Link, useParams } from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";
import ProductQuoteForm from "../reusable/ProductQuoteForm";

function ProductQuoteContent() {
  const { productType } = useParams();
  return (
    <div id="productQuoteContent" className="productQuoteContent">
      <div className="wrapper">
        <div className="quoted-service">
          <div className="back">
            <Link to={-1}>
              <MdKeyboardArrowLeft /> Back
            </Link>
          </div>
          <p className="label">You have selected</p>
          <div className="service-card">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423172/Arc_Services/Products/e5d4ki7djo1ptlzbol3o.webp"
                alt={productType}
              />
            </div>
            <div className="details">
              <p className="name">ARC Copper Roofing</p>
              <p className="desc">
                Arc Roofing Corporation boasts metal roofing specialists with
                decades of expertise in copper and sheet metal trades, a rare
                find in ...
              </p>
            </div>
          </div>
        </div>
        <div className="form">
          <ProductQuoteForm />
        </div>
      </div>
    </div>
  );
}

export default ProductQuoteContent;
