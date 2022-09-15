import React from "react";

// Package
import { motion } from "framer-motion";

const ProjectCard = ({ img, title, category, description, link }) => {
  return (
    <>
      <motion.article
        className="project"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img alt={title} src={img} />
        <aside className="project-content">
          <h3 className="project-title">{title}</h3>
          <h4 className="project-techno">{category}</h4>
          <p className="project-description">{description}</p>

          <a className="project-link" href={link} blank="">
            Visiter
            <svg
              className="projects-svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </aside>
      </motion.article>
    </>
  );
};

export default ProjectCard;
