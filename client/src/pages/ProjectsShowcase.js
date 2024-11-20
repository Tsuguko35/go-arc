import React from "react";
import { MainFooter, ProjectsShowcaseContent } from "../components";

function ProjectsShowcase() {
  return (
    <div id="projectsShowcase" className="projectsShowcase">
      {/* Content */}
      <ProjectsShowcaseContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default ProjectsShowcase;
