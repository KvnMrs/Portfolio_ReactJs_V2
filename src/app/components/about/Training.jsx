import React, { useState } from "react";

// Datas
import dataTraining from "../../../datas/datasTraining";

// Sub-Component
import WebDevelopmentTraining from "../../sub-components/modal/WebDevelopmentTraining";
import OtherTraining from "../../sub-components/modal/OtherTraining";

function Training() {
  const [showTrainingDev, setShowTrainingDev] = useState(1);

  return (
    <>
      <div className="content-experiences-training">
        <div className="nav-experiences-training">
          <button
            className="buttons-nav-experiences-training"
            onClick={() => setShowTrainingDev(1)}
          >
            Developement web
          </button>
          <button
            className="buttons-nav-experiences-training md:mt-2"
            onClick={() => setShowTrainingDev(2)}
          >
            Autres
          </button>
        </div>
      </div>
      <div className="experiences-list">
        {showTrainingDev === 1 ? (
          <div className="experiences-training-list min-h-screen">
            <WebDevelopmentTraining datas={dataTraining[0]} />
          </div>
        ) : (
          dataTraining.map((training) => (
            <div className="experiences-training-list">
              <OtherTraining datas={training} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Training;
