import React from "react";
import { MainFooter, ProjectDetailsContent } from "../components";

function ProjectDetails() {
  return (
    <div id="projectDetails" className="projectDetails">
      {/* Content */}
      <ProjectDetailsContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default ProjectDetails;
