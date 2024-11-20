import React from "react";
import "../../styles/serviceResContent.css";
import { residentialKeyPoints } from "../../utils";
import ServiceKeyPoints from "../reusable/ServiceKeyPoints";
import ProductGrid from "../reusable/ProductGrid";
import { residentialItems, residentialProducts } from "../../utils";
import RoofCarousel from "../reusable/RoofCarousel";

function ResidentialContent() {
  const keypoints = residentialKeyPoints;
  const products = residentialProducts;
  const roofItems = residentialItems;
  return (
    <div id="residntialContent" className="residntialContent">
      <div className="wrapper">
        <div className="text-content feature">
          <p className="header notBold">
            The <span className="bold"> BEST </span> Residential Roofing!
          </p>
          <div className="text">
            <p className="description">
              Arc Corporation delivers unmatched residential roofing services,
              encompassing repairs, maintenance, and installations. From
              impact-resistant asphalt shingles to exquisite Ludowici clay
              tiles, our range of high-performance roofing systems ensures the
              perfect fit for your needs. Trust our experts for superior
              craftsmanship and lasting quality.
            </p>
          </div>
        </div>

        {/* Key Points */}
        <ServiceKeyPoints keypoints={keypoints} />

        <div className="text-content feature">
          <p className="header">Residential Roof Systems</p>
          <div className="text">
            <p className="description">
              Arc Corporation utilizes top-tier roofing systems in a diverse
              array of styles, guaranteeing a visually appealing roof that adds
              value and provides unparalleled protection against severe weather.
              Beneath the surface, we integrate advanced products to enhance
              your roof's performance, such as Titanium UDL underlayment crafted
              from NASA-developed materials. Through the fusion of premium
              details, accessories, and durable, elegant roofing materials, Arc
              ensures the installation of roofs that stand the test of time.
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

export default ResidentialContent;
