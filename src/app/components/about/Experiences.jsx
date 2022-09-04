import React, { useState } from "react";

// Datas
import datasExperiences from "../../../datas/datasExperiences";

// Sub-Component
import OtherExperiences from "../../sub-components/modal/OtherExperiences";
import WebDevelopmentExperiences from "../../sub-components/modal/WebDevelopmentExperiences";

function Experiences() {
  const [showExperienceDev, setShowExperienceDev] = useState(1);

  return (
    <>
      <div className="content-experiences-training">
        <div className="nav-experiences-training">
          <button
            className="buttons-nav-experiences-training"
            onClick={() => setShowExperienceDev(1)}
          >
            Developement web
          </button>
          <button
            className="buttons-nav-experiences-training md:mt-2"
            onClick={() => setShowExperienceDev(2)}
          >
            Autres
          </button>
        </div>
      </div>
      <div className="experiences-training-container-list">
        {showExperienceDev === 1 ? (
          <div className="experiences-training-list min-h-screen">
            <WebDevelopmentExperiences datas={datasExperiences[0]} />
          </div>
        ) : (
          datasExperiences.map((experience) => (
            <div className="experiences-training-list">
              <OtherExperiences datas={experience} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Experiences;
