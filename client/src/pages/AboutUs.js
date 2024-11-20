import React, { useEffect } from "react";
import {
  AboutUsContent,
  AboutUsHeader,
  ClientReviews,
  Faq,
  MainFooter,
} from "../components";

function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Arc Corporation";
  });
  return (
    <div id="aboutUs" className="aboutUs">
      {/* Header */}
      <AboutUsHeader />

      {/* Content */}
      <AboutUsContent />
      <Faq />
      <ClientReviews />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default AboutUs;
