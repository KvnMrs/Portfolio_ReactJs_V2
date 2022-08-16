import React from "react";

// Components
import ProjectCard from "../../components/projects/ProjectCard";

// Datas
import DatasProjects from "../../../datas/datasProjects";

function Projects() {
  return (
    <>
      <section id="projects" className="Projects-container bg-section-card">
        <h2>Projets</h2>
        <div className="Projects-part">
          {DatasProjects.map((el) => (
            <>
              <ProjectCard
                img={el.img}
                title={el.title}
                category={el.category}
                description={el.description}
                link={el.link}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
