import React from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

const ProjectCard = ({ projectData }) => {
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

      <div className="flex flex-col gap-4 self-center | md:w-1/2 | ">
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
        <p className="project-description">{projectData.description}</p>
        <p className="project-description">{projectData.note}</p>
        <aside className="project-infos ">
          <button className="btn-visit button-ping move-shadow">Visiter</button>
        </aside>
      </div>
    </article>
  );
};

export default ProjectCard;
