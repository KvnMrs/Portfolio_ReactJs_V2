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
      <div className=" h-full w-auto flex flex-col mr-3">
        <button
          className="self-start bg-black w-44 py-2 px-4 h-10 justify-center rounded-sm "
          onClick={() => setShowExperienceDev(1)}
        >
          Developement web
        </button>
        <button
          className="self-start bg-black w-44 py-2 px-4 h-10 justify-center mt-2 rounded-sm "
          onClick={() => setShowExperienceDev(2)}
        >
          Autres
        </button>
      </div>
      <div className="content-experiences">
        {showExperienceDev === 1 ? (
          <div className="min-h-screen bg-slate-700 bg-opacity-50">
            <WebDevelopmentExperiences datas={datasExperiences[0]} />
          </div>
        ) : (
          datasExperiences.map((experience) => (
            <div className="bg-slate-700  divide-black divide-y-8">
              <OtherExperiences datas={experience} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Experiences;
