import React from "react";
import { MainFooter, ProjectsContent } from "../components";

function Projects() {
  return (
    <div id="projects" className="projects">
      {/* Content */}
      <ProjectsContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default Projects;
