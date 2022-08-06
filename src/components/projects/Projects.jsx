import React from "react";
import DatasProjects from "../../datas/DatasProjects";
import ProjectCard from "../../sub-components/projects/ProjectCard";

function Projects() {
  return (
    <>
      <section id="projects" className="Projects-container">
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
