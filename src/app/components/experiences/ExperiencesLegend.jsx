import React, { useState } from "react";

const ExperiencesLegend = () => {
  const [activeLegend, setActiveLegend] = useState(false);
  return (
    <>
      <div className="legend-experience-container">
        <div className="legend-experience-sub-container">
          <div className="flex place-content-center items-center mb-5">
            <input
              type={"checkbox"}
              name="Types expériences"
              className="w-5 h-5 mx-2"
              onClick={() => setActiveLegend(!activeLegend)}
            />
            <label htmlFor="Types expériences">Types expériences</label>
          </div>
          <ul className="legend-experience-list">
            <li className="legend-experience-list-elements">
              <div className="legend-elements-circles bg-red-400"></div>
              <p className="ml-2">Developement web</p>
            </li>
            <li className="legend-experience-list-elements">
              <div className="legend-elements-circles bg-green-400"></div>
              <p className="ml-2">Restauration</p>
            </li>
            <li className="legend-experience-list-elements">
              <div className="legend-elements-circles bg-blue-400"></div>
              <p className="ml-2">Coiffure</p>
            </li>
            <li className="legend-experience-list-elements">
              <div className="legend-elements-circles bg-yellow-400"></div>
              <p className="ml-2">Autres</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExperiencesLegend;
