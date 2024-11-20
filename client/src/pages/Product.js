import React, { useEffect } from "react";
import { MainFooter, ProductContent } from "../components";

function Product() {
  useEffect(() => {
    document.title = "About Us | Arc Corporation";
  });
  return (
    <div id="product" className="product">
      {/* Content */}
      <ProductContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default Product;
