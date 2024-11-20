import React, { useEffect } from "react";
import {
  ClientReviews,
  FooterWithMessage,
  PortfolioContent,
  PortfolioHeader,
} from "../components";

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | Arc Corporation";
  });
  return (
    <div id="portfolio" className="portfolio">
      {/* Header */}
      <PortfolioHeader />

      {/* Content */}
      <PortfolioContent />
      <ClientReviews />

      {/* Footer */}
      <FooterWithMessage />
    </div>
  );
}

export default Portfolio;
