import React, { useEffect } from "react";
import { ContactUsContent, Faq, MainFooter } from "../components";

function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us | Arc Corporation";
  });
  return (
    <div id="contactUs" className="contactUs">
      {/* Content */}
      <ContactUsContent />
      <Faq />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default ContactUs;
