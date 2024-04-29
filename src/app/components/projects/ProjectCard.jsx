import React from "react";

const ProjectCard = ({ projectData }) => {
  if (!projectData) return null;
  return (
    <article
      id={projectData.id}
      className="project border-y-[0.05rem] border-y-white"
    >
      <img
        className="project-img "
        alt={projectData.title}
        src={projectData.img}
      />
      {/* <div className="w-1/2 flex flex-col">
        <aside className="project-content">
          <h3 className="project-title">{projectData.title}</h3>
          <p className="project-description">{projectData.description}</p>
          <p className="project-description">{projectData.note}</p>
        </aside>
        <aside className="project-infos">
          <a className="project-link" href={projectData.link} blank="">
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
            {projectData.technologies.map((techno) => (
              <li>
                <img className="project-techno-icon" src={techno} />
              </li>
            ))}
          </ul>
        </aside>
      </div> */}
    </article>
  );
};

export default ProjectCard;
