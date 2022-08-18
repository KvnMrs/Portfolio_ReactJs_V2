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
      <div className=" h-full w-auto flex flex-col mr-3">
        <button
          className="self-start bg-black w-44 py-2 px-4 h-10 justify-center rounded-sm "
          onClick={() => setShowTrainingDev(1)}
        >
          Developement web
        </button>
        <button
          className="self-start bg-black w-44 py-2 px-4 h-10 justify-center mt-2 rounded-sm "
          onClick={() => setShowTrainingDev(2)}
        >
          Autres
        </button>
      </div>
      <div className="content-experiences">
        {showTrainingDev === 1 ? (
          <div className="min-h-screen bg-slate-700 bg-opacity-50">
            <WebDevelopmentTraining datas={dataTraining[0]} />
          </div>
        ) : (
          dataTraining.map((training) => (
            <div className="bg-slate-700  divide-black divide-y-8">
              <OtherTraining datas={training} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Training;
