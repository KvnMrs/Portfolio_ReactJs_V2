import React, { useRef, useEffect } from "react";

// Package
import { motion } from "framer-motion";

// Animations
import { projecItemAnim } from "../../animations/projectsAnimation";

const ProjectCard = ({
  id,
  img,
  title,
  technologies,
  description,
  link,
  note,
  projectRefprop,
}) => {
  const projectRef = useRef();

  useEffect(() => {
    projectRefprop.current.push(projectRef.current);
  }, []);

  return (
    <>
      <motion.article
        id={id}
        ref={projectRef}
        className="project"
        variants={projecItemAnim}
        initial="initial"
        animate="animate"
        exit="exit"
        viewport={{ once: true }}
      >
        <img className="project-img" alt={title} src={img} />
        <aside className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <p className="project-description">{note}</p>
        </aside>
        <aside className="project-infos">
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
          <ul className="project-technos">
            {technologies.map((techno) => (
              <li>
                <img className="project-techno-icon" src={techno} />
              </li>
            ))}
          </ul>
        </aside>
      </motion.article>
    </>
  );
};

export default ProjectCard;
