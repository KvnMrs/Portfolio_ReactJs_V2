import React, { useState } from "react";

// Package
import { motion, AnimatePresence } from "framer-motion";

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
import { projectsAnim } from "../../animations/projectsAnimation";

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
      <section id="projects" className="sections-containers">
        <div className="sections-surfaces">
          <article className="sections-sub-containers">
            <header className="sections-headers">
              <h2 className="sections-titles">Projets</h2>
            </header>
            <motion.div
              className="projects-carrousel"
              variants={projectsAnim}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
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
                  "absolute top-1/2 z-10 right-2 md:left-3/4 md:ml-5 "
                }
              />
              <AnimatePresence>
                {DatasProjects.map((el, index) => (
                  <>
                    {currentProject === index && (
                      <ProjectCard
                        key={el.title}
                        img={el.img}
                        title={el.title}
                        category={el.category}
                        description={el.description}
                        link={el.link}
                      />
                    )}
                  </>
                ))}
              </AnimatePresence>
            </motion.div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Projects;
