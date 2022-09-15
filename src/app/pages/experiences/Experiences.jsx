import React, { useState } from "react";

// Package
import { motion } from "framer-motion";

// Datas
import datasExperiences from "../../../datas/datasExperiences";
import dataTraining from "../../../datas/datasTraining";

// Components
import ExperiencesLegend from "../../components/experiences/ExperiencesLegend";

// Sub-Component
import ExperiencesList from "../../components/experiences/ExperiencesList";
import TrainingsList from "../../components/experiences/TrainingsList";
import ButtonCallToActionSvg from "../../sub-components/buttons/ButtonCallToActionSvg";

// Assets
import RightArrowSvg from "../../../assets/svg/global/RightArrowSvg";
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

function Experiences() {
  const [showExperiences, setShowExperiences] = useState(true);
  const [legend, setLegend] = useState(false);

  const activeLegend = () => {
    setLegend(!legend);
  };

  const toggleList = () => {
    return setShowExperiences(!showExperiences);
  };
  return (
    <>
      <section id="experiences" className="sections-containers">
        <div className="sections-surfaces">
          <article className="sections-sub-containers">
            <header className="sections-headers pb-0">
              {/* Experience or Trainings */}
              {showExperiences ? (
                <>
                  <h1 className="sections-titles ">Experiences</h1>
                  <ButtonCallToActionSvg
                    svg={<RightArrowSvg />}
                    fct={() => toggleList()}
                    customClass={"ml-5"}
                  />
                </>
              ) : (
                <>
                  <ButtonCallToActionSvg
                    svg={<LeftArrowSvg />}
                    fct={() => toggleList()}
                    customClass={"mr-5"}
                  />

                  <h1 className="sections-titles ">Formations</h1>
                </>
              )}
            </header>

            {/* Center list for Trainning */}
            <div
              className={
                showExperiences
                  ? "lists-container sm:items-center lg:justify-start"
                  : "lists-container place-content-center"
              }
            >
              {/* Show Legend for Experience */}
              {showExperiences && (
                <ExperiencesLegend legend={legend} showLegend={activeLegend} />
              )}

              <motion.aside
                className="lists-experience-training h-5/6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Show experiences */}
                {showExperiences &&
                  datasExperiences.map((experience) => (
                    <motion.div
                      className={
                        legend
                          ? `lists-elements-containers ${experience.bgColor}`
                          : "lists-elements-containers bg-gradient-to-r from-slate-500 to-slate-700"
                      }
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <ExperiencesList datas={experience} />
                    </motion.div>
                  ))}
                {/* Show trainings */}
                {!showExperiences &&
                  dataTraining.map((training) => (
                    <motion.div
                      className="lists-elements-containers bg-gradient-to-r from-slate-500 to-slate-700"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <TrainingsList datas={training} />
                    </motion.div>
                  ))}
              </motion.aside>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Experiences;
