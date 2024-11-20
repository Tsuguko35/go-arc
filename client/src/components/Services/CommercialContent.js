import React from "react";
import "../../styles/serviceComContent.css";
import { commercialItems, commercialKeyPoints } from "../../utils";
import ServiceKeyPoints from "../reusable/ServiceKeyPoints";
import ProductGrid from "../reusable/ProductGrid";
import { commercialProducts } from "../../utils";
import RoofCarousel from "../reusable/RoofCarousel";

function CommercialContent() {
  const keypoints = commercialKeyPoints;
  const products = commercialProducts;
  const roofItems = commercialItems;
  return (
    <div id="commercialContent" className="commercialContent">
      <div className="wrapper">
        <div className="text-content feature">
          <p className="header notBold">
            Commercial Roofing Never Seen Before!
          </p>
          <div className="text">
            <p className="description">
              Arc Corporation specializes in providing comprehensive commercial
              roofing solutions tailored to the unique needs of businesses. From
              large-scale installations to repairs and maintenance, our team
              delivers unmatched expertise and quality craftsmanship. Trust us
              to safeguard your commercial property with durable, reliable
              roofing systems designed to withstand the rigors of the commercial
              environment.
            </p>
          </div>
        </div>

        {/* Key Points */}
        <ServiceKeyPoints keypoints={keypoints} />

        <div className="text-content feature">
          <p className="header">Commercial Roof Systems</p>
          <div className="text">
            <p className="description">
              Arc Corporation excels in delivering premium commercial roofing
              solutions, ensuring your business property receives the utmost
              protection and aesthetic appeal. We offer an extensive selection
              of top-tier roofing systems in various styles, providing
              unparalleled defense against severe weather conditions. Beneath
              the surface, our integration of advanced products, including
              NASA-developed Titanium UDL underlayment, enhances your roof's
              performance and longevity. With a focus on premium details,
              accessories, and durable materials, Arc guarantees the
              installation of commercial roofs that withstand the test of time,
              offering lasting value and peace of mind.
            </p>
          </div>
        </div>

        {/* Products */}
        <ProductGrid products={products} />

        {/* Roof Carousel */}
        <RoofCarousel roofItems={roofItems} />
      </div>
    </div>
  );
}

export default CommercialContent;
