import React, { useRef } from "react";
import "./ProjectCard.css";
// Animations
import { motion, useInView } from "framer-motion";
import {
  comeFromLeftAnim,
  comeFromRightAnim,
} from "../../animations/common/commonAnimations.js";

const ProjectCard = ({ projectData }) => {
  const refProjectDescipt = useRef(null);
  const isInViewProjectDescript = useInView(refProjectDescipt, {
    once: true,
    margin: "-20% 0px",
  });
  if (!projectData) return null;
  return (
    <article
      id={projectData.id}
      className={
        projectData.id % 2 === 0
          ? "project-box lg:flex-row-reverse"
          : "project-box lg:flex-row "
      }
    >
      <h3 className="project-title md:hidden">{projectData.title}</h3>

      <div className="project-img-box ">
        <motion.img
          className={
            projectData.id % 2 === 0
              ? "project-img rotating-box-3d-right "
              : "project-img rotating-box-3d-left"
          }
          alt={projectData.title}
          src={projectData.img}
        />
      </div>

      <div className="project-description-part">
        <h3 className="hidden | md:flex project-title">{projectData.title}</h3>
        <motion.p
          ref={refProjectDescipt}
          variants={
            projectData.id % 2 === 0 ? comeFromLeftAnim : comeFromRightAnim
          }
          initial="initial"
          animate={isInViewProjectDescript ? "animate" : "initial"}
          className="project-description"
        >
          {projectData.description}
        </motion.p>
        <motion.p
          ref={refProjectDescipt}
          variants={
            projectData.id % 2 === 0 ? comeFromLeftAnim : comeFromRightAnim
          }
          initial="initial"
          animate={isInViewProjectDescript ? "animate" : "initial"}
          className="project-description"
        >
          Etat: {projectData.note}
        </motion.p>
        <aside className="project-infos ">
          <a
            href={projectData.link}
            target="_blank"
            rel="noreferrer"
            className="btn-visit button-ping move-shadow"
          >
            Visiter
          </a>
        </aside>
      </div>
    </article>
  );
};

export default ProjectCard;
