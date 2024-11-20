import React, { useEffect } from "react";

import {
  ClientReviews,
  MainFooter,
  ServicesContent,
  ServicesHeader,
} from "../components";

function Services() {
  useEffect(() => {
    document.title = "Services | Arc Corporation";
  });
  return (
    <div id="services" className="services">
      {/* Header */}
      <ServicesHeader />

      {/* Content */}
      <ServicesContent />
      <ClientReviews />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default Services;
