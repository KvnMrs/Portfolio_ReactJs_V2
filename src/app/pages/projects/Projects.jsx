import React, { useState, useRef, useEffect } from "react";

// Package
import { motion } from "framer-motion";

// Components
import ProjectCard from "../../components/projects/ProjectCard";

// Sub-Component
import ButtonCallToActionSvg from "../../sub-components/buttons/ButtonCallToActionSvg";

// Datas
import DatasProjects from "../../../datas/datasProjects";

// Assets
import RightArrowSvg from "../../../assets/svg/global/RightArrowSvg";
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

// Animations
import { projectsContainer } from "../../animations/projectsAnimation";

function Projects() {
  const [currentProject, SetCurrentProject] = useState(0);
  const length = DatasProjects.length;
  const itemsRef = useRef([]);

  const nextProject = () => {
    SetCurrentProject(currentProject === length - 1 ? 0 : currentProject + 1);
  };

  const previousProject = () => {
    SetCurrentProject(currentProject === 0 ? length - 1 : currentProject - 1);
  };
  useEffect(() => {
    itemsRef.current[currentProject].scrollIntoView({
      behavior: "smooth",
    });
  }, [currentProject]);
  return (
    <>
      <section id="projects" className="sections-containers">
        <div className="sections-surfaces">
          <article className="article-containers relative">
            <header className="sections-headers">
              <h2 className="sections-titles">Projets</h2>
            </header>
            <motion.div
              className="projects-carrousel"
              variants={projectsContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {currentProject > 0 && (
                <ButtonCallToActionSvg
                  svg={<LeftArrowSvg />}
                  fct={() => previousProject()}
                  customClass={"absolute top-1/2 z-10 -left-3 md:left-20 "}
                />
              )}
              {currentProject < length - 1 && (
                <ButtonCallToActionSvg
                  svg={<RightArrowSvg />}
                  fct={() => nextProject()}
                  customClass={
                    "absolute top-1/2 z-10 -right-3 md:right-20 md:mr-5 "
                  }
                />
              )}
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
            </motion.div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Projects;
