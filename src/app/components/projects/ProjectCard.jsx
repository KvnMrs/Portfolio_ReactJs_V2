import React from "react";

const ProjectCard = ({ projectData }) => {
  if (!projectData) return null;
  return (
    <article
      id={projectData.id}
      className="project pt-16 place-items-center items-center justify-center content-center"
    >
      <div className="flex flex-col gap-4">
        <h3 className="project-title">{projectData.title}</h3>
        <img
          className="project-img "
          alt={projectData.title}
          src={projectData.img}
        />
      </div>

      <div className="flex flex-col">
        <aside className="project-content">
          <p className="project-description">{projectData.description}</p>
          <p className="project-description">{projectData.note}</p>
        </aside>
        <aside className="project-infos">
          <ul className="project-technos">
            {projectData.technologies.map((techno) => (
              <li>
                <img className="project-techno-icon" src={techno} />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
};

export default ProjectCard;
