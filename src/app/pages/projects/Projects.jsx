import React, { useState } from "react";

// Components
import ProjectCard from "../../components/projects/ProjectCard";

// Sub-Component
import ButtonCallToActionSvg from "../../sub-components/buttons/ButtonCallToActionSvg";

// Datas
import DatasProjects from "../../../datas/datasProjects";

// Assets
import RightArrowSvg from "../../../assets/svg/global/RightArrowSvg";
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

function Projects() {
  const [currentProject, SetCurrentProject] = useState(0);
  const length = DatasProjects.length;

  const nextProject = () => {
    SetCurrentProject(currentProject === length - 1 ? 0 : currentProject + 1);
  };

  const previousProject = () => {
    SetCurrentProject(currentProject === 0 ? length - 1 : currentProject - 1);
  };
  return (
    <>
      <section id="projects" className="section-container">
        <div className="section-surface">
          <article className="section-sub-container">
            <header className="section-header">
              <h2 className="section-title">Projets</h2>
            </header>
            <div className="projects-carrousel">
              <ButtonCallToActionSvg
                svg={<LeftArrowSvg />}
                fct={() => previousProject()}
                customClass={
                  "absolute top-1/2 z-10 left-2 md:left-auto md:right-3/4 md:mr-5 "
                }
              />
              <ButtonCallToActionSvg
                svg={<RightArrowSvg />}
                fct={() => nextProject()}
                customClass={
                  "absolute top-1/2 z-10 right-2  md:left-3/4 md:ml-5 "
                }
              />
              {DatasProjects.map((el, index) => (
                <>
                  {currentProject === index ? (
                    <ProjectCard
                      key={el.title}
                      img={el.img}
                      title={el.title}
                      category={el.category}
                      description={el.description}
                      link={el.link}
                    />
                  ) : null}
                </>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Projects;
