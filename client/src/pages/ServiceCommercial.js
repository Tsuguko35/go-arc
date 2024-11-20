import React, { useEffect } from "react";
import {
  ClientReviews,
  CommercialContent,
  CommercialHeader,
  MainFooter,
} from "../components";

function ServiceCommercial() {
  useEffect(() => {
    document.title = "Commercial | Arc Corporation";
  });
  return (
    <div id="serviceCommercial" className="serviceCommercial">
      {/* Header */}
      <CommercialHeader />

      {/* Content */}
      <CommercialContent />
      <ClientReviews />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default ServiceCommercial;
