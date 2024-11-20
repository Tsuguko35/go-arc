import React from "react";
import { MainFooter, ProductQuoteContent } from "../components";

function ProductQuote() {
  return (
    <div id="productQuote" className="productQuote">
      {/* Content */}
      <ProductQuoteContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default ProductQuote;
