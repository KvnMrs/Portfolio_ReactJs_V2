import React, { useState } from "react";

// Components
import ProjectCard from "../../components/projects/ProjectCard";

// Sub-Component
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";

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
      <section id="projects" className="Projects-container bg-section-card">
        <h2 className="title-section">Projets</h2>
        <div className="Projects-part">
          <ButtonsSvg
            svg={<LeftArrowSvg />}
            fct={() => previousProject()}
            customClass={
              "absolute top-1/2 z-10 left-2 md:left-auto md:right-3/4 md:mr-5 "
            }
          />
          <ButtonsSvg
            svg={<RightArrowSvg />}
            fct={() => nextProject()}
            customClass={"absolute top-1/2 z-10 right-2  md:left-3/4 md:ml-5 "}
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
      </section>
    </>
  );
}

export default Projects;
