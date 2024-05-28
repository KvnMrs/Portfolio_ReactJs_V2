import React from "react";
// Animations
import { motion, AnimatePresence } from "framer-motion";
import { onNavigateAnim } from "../../animations/common/commonAnimations.js";
// Components
import ProjectCard from "../../components/projects/ProjectCard";
import dataProjects from "../../../datas/datasProjects";

function Projects() {
  return (
    <>
      <motion.section
        variants={onNavigateAnim}
        initial="initial"
        animate="animate"
        className="section-containers"
      >
        <div className="projects-container">
          <AnimatePresence exitBeforeEnter>
            {dataProjects.map((el) => (
              <>
                <ProjectCard projectData={el} />
                <div className="divider"></div>
              </>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>
    </>
  );
}

export default Projects;
