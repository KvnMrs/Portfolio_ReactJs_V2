import React from "react";

// Datas
import datasExperiences from "../../../datas/datasExperiences";
import dataTraining from "../../../datas/datasTraining";

// Sub-Component
import OtherExperiences from "../../sub-components/modal/OtherExperiences";
import OtherTraining from "../../sub-components/modal/OtherTraining";
import WebDevelopmentExperiences from "../../sub-components/modal/WebDevelopmentExperiences";

function Experiences() {
  return (
    <>
      <section id="experiences" className="section-container">
        <div className="section-surface">
          <article className="section-sub-container">
            <header className="section-header">
              <h1 className="section-title">Expreiences & Formations</h1>
            </header>
            <div className="flex w-full h-5/6 bg-red-400">
              <aside className="experiences-list">
                {datasExperiences.map((experience) => (
                  <div className="experiences-training-list">
                    <OtherExperiences datas={experience} />
                  </div>
                ))}
              </aside>
              {/* 
              <aside className="experiences-list">
                {dataTraining.map((training) => (
                  <div className="experiences-training-list">
                    <OtherTraining datas={training} />
                  </div>
                ))}
              </aside> */}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Experiences;
