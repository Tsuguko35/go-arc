import React, { useEffect } from "react";
import { MainFooter, RequestQuoteContent } from "../components";
import "../styles/requestQuote.css";

function RequestQuote() {
  useEffect(() => {
    document.title = "Quote | Arc Corporation";
  });
  return (
    <div id="requestQuote" className="requestQuote">
      {/* Content */}
      <RequestQuoteContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default RequestQuote;
