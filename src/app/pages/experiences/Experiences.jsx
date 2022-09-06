import React, { useState } from "react";

// Datas
import datasExperiences from "../../../datas/datasExperiences";
import dataTraining from "../../../datas/datasTraining";

// Sub-Component
import ExperiencesList from "../../components/experiences/ExperiencesList";
import TrainingsList from "../../components/experiences/TrainingsList";

function Experiences() {
  const [showTraings, setShowTrainings] = useState(false);

  return (
    <>
      <section id="experiences" className="sections-containers">
        <div className="sections-surfaces">
          <article className="sections-sub-containers">
            <header className="sections-headers">
              <h1 className="sections-titles">Experiences & Formations</h1>
            </header>
            <div className="lists-container">
              <aside className="lists-experience-training">
                {datasExperiences.map((experience) => (
                  <div className="experiences-trainings-lists">
                    <ExperiencesList datas={experience} />
                  </div>
                ))}
              </aside>
              <aside className="lists-experience-training">
                {dataTraining.map((training) => (
                  <div className="experiences-trainings-lists">
                    <TrainingsList datas={training} />
                  </div>
                ))}
              </aside>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Experiences;
