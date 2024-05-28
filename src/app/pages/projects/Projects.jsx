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
        <div className="md:w-2/3 md:absolute f-col md:flex-row gap-4  p-4 top-8 bg-sky-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-current self-center shrink-0 w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="text-lg">
            Les projets suivants sont inactifs. Ils sont présents pour donner un
            contenu visuel à la page en attendant l'enrichissement de celle-ci
            avec mes futurs projets. <br />{" "}
            <span className="font-medium">
              Vous pourrez tout de même avoir un apercu en ayant un simple accès
              aux pages d'accueils.
            </span>
          </p>
        </div>
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
