import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

const ProjectCard = ({ projectData }) => {
  if (!projectData) return null;
  return (
    <article
      id={projectData.id}
      className={
        projectData.id % 2 === 0 ? "project lg:flex-row-reverse" : "project"
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

      <div className="flex flex-col self-center | md:w-1/2 md:p-8 | lg:w-2/5 lg:gap-8 ">
        <h3 className="hidden md:flex project-title mb-8  ">
          {projectData.title}
        </h3>
        <p className="project-description">{projectData.description}</p>
        <p className="project-description">{projectData.note}</p>
        <aside className="project-infos">
          <motion.button className=" py-2 px-8 text-xl font-medium rounded-lg mt-8 transition-all text-dark_blue shadow-md shadow-white animate-pulse hover:animate-none bg-slate-200 duration-300 | hover:scale-110 hover:font-semibold move-shadow">
            Visiter
          </motion.button>
        </aside>
      </div>
    </article>
  );
};

export default ProjectCard;
