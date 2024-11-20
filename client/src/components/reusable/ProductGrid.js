import React from "react";
import "../../styles/productGrid.css";
import { Link } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <div id="productGrid" className="productGrid feature3">
      <div className="coming-soon">
        <p className="main">Coming Soon</p>
        <p className="sub">
          Our comprehensive list of roofing services is coming soon, offering
          you top-notch repairs, installations, and maintenance to keep your
          home secure!
        </p>
      </div>
      {/* <div className="action">
        <p>See all.</p>
      </div> */}
      <div className="products-container">
        <div className="products">
          {products &&
            products.map((product) => (
              <Link to={product.link} className="product">
                <div className="background">
                  <div className="overlay"></div>
                  <img src={product.image} alt="product" />
                </div>
                <p className="label">{product.label}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
