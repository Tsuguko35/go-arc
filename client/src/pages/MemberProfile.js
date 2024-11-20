import React, { useEffect } from "react";
import { MainFooter, MemberProfileContent } from "../components";

function MemberProfile() {
  useEffect(() => {
    document.title = "About Us | Arc Corporation";
  });
  return (
    <div id="memberProfile" className="memberProfile">
      {/* Content */}
      <MemberProfileContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default MemberProfile;
