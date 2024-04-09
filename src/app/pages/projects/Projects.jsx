import React, { useRef } from "react";
import { Link } from "react-router-dom";
// Components
import ProjectCard from "../../components/projects/ProjectCard";
// Sub-components
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";
// Datas
import DatasProjects from "../../../datas/datasProjects";

function Projects() {
  const itemsRef = useRef([]);

  return (
    <>
      <section id="projects" className="section-containers">
        <article className="article-containers relative">
          <header className="section-headers">
            <h2 className="section-titles">Projets</h2>
          </header>
          <div className="project-containers">
            {DatasProjects.map((el) => (
              <>
                {
                  <ProjectCard
                    key={el.id}
                    img={el.img}
                    title={el.title}
                    technologies={el.technologies}
                    description={el.description}
                    link={el.link}
                    note={el.note}
                    projectRefprop={itemsRef}
                  />
                }
              </>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default Projects;
