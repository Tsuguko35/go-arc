import React from "react";
import "../../styles/productContent.css";
import RoofCarousel from "../reusable/RoofCarousel";
import { residentialItems } from "../../utils";
import { Link, useParams } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

function ProductContent() {
  const roofItems = residentialItems;
  const { productType } = useParams();
  return (
    <div id="productContent" className="productContent">
      <div className="wrapper">
        <header className="header">
          <div className="overlay"></div>
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423172/Arc_Services/Products/e5d4ki7djo1ptlzbol3o.webp"
            }
            alt="product 1"
          />
          <Link to={-1}>
            <IoIosArrowBack /> Back
          </Link>
        </header>
        <div className="product-details-container">
          <div className="product-details start-fade-bottom">
            <div className="title-action">
              <p className="title">ARC Copper Roofing</p>
              <Link to={`/Services/Quote/${productType}`}>Get a Quote</Link>
            </div>
            <p className="description">
              Arc Roofing Corporation boasts metal roofing specialists with
              decades of expertise in copper and sheet metal trades, a rare find
              in today's market. If copper roofing aligns with your home's
              needs, our artisans are the perfect match for your roofing
              project, ensuring unparalleled craftsmanship and attention to
              detail. Trust Arc for exquisite metal roofing solutions that
              elevate the aesthetic and durability of your property.
            </p>
          </div>

          <div className="product-benefits feature">
            <p className="title">Benefits of Copper Roofing</p>
            <div className="benefits-grid">
              <div className="benefit">
                <div className="icon">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716420607/Icons/Services/jymunvoecdbjp22xqhqn.webp"
                    }
                    alt="ben 1"
                  />
                </div>
                <p className="benefit-title">Durability</p>
                <p className="benefit-desc">
                  Copper is an ideal roofing material for buildings that command
                  attention. It’s a uniquely adaptive type of roof with a wide
                  range of designs that suit any style of architecture—from
                  historic to contemporary. Copper roofs are widely known for
                  their ability to last for centuries and resist the elements,
                  making copper a terrific choice for property owners who want a
                  roof that will last a lifetime.
                </p>
              </div>
              <div className="benefit">
                <div className="icon">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716420607/Icons/Services/ln9f84ib8zkioeezhqpn.webp"
                    }
                    alt="ben 2"
                  />
                </div>
                <p className="benefit-title">Flexibility & Detail</p>
                <p className="benefit-desc">
                  Copper is an ideal roofing material for buildings that command
                  attention. It’s a uniquely adaptive type of roof with a wide
                  range of designs that suit any style of architecture—from
                  historic to contemporary. Copper roofs are widely known for
                  their ability to last for centuries and resist the elements,
                  making copper a terrific choice for property owners who want a
                  roof that will last a lifetime.
                </p>
              </div>
              <div className="benefit">
                <div className="icon">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716420607/Icons/Services/yc4ektyezwvxkktzj76q.webp"
                    }
                    alt="ben 3"
                  />
                </div>
                <p className="benefit-title">Affordability</p>
                <p className="benefit-desc">
                  While installing a copper roof can be more expensive than
                  other roofing materials, the long-term savings make it a
                  cost-effective option. Copper roofs are known to last more
                  than a century, which is part of the reason that properties
                  with copper roofs tend to have higher resale values. Since the
                  material is highly durable, property owners avoid the need to
                  pay for multiple roof replacements or repairs compared with
                  other roof types.
                </p>
              </div>
              <div className="benefit">
                <div className="icon">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716420608/Icons/Services/jyntqhebvrznl7rpzerr.webp"
                    }
                    alt="ben 4"
                  />
                </div>
                <p className="benefit-title">Sustainability</p>
                <p className="benefit-desc">
                  Copper roofs are sustainable and recyclable, so you can feel
                  good about choosing one for your property. The waste is
                  minimal since most copper roofs last for over 100 years. And
                  when your roof does need to be replaced, the materials can be
                  recycled and reused without an adverse environmental impact.
                  So, if you’re looking for a beautiful and sustainable roof
                  with protection and curb appeal that last, copper is an
                  excellent option.
                </p>
              </div>
            </div>
          </div>
          {/* Roof Carousel */}
          <RoofCarousel roofItems={roofItems} />
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
