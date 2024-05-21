import React from "react";
import { AnimatePresence } from "framer-motion";
// Components
import ProjectCard from "../../components/projects/ProjectCard";
import dataProjects from "../../../datas/datasProjects";

function Projects() {
  return (
    <>
      <section className="section-containers">
        <div className="projects-container">
          <AnimatePresence exitBeforeEnter>
            {dataProjects.map((el) => (
              <>
                <ProjectCard projectData={el} />
              </>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

export default Projects;
