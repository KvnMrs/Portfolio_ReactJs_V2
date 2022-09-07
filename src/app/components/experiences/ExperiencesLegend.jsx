import React, { useState } from "react";

const ExperiencesLegend = ({ legend, showLegend }) => {
  return (
    <>
      <div className="legend-container">
        <div className="legend-sub-container">
          <div className="legend-checkbox-container">
            <input
              type={"checkbox"}
              value={legend}
              checked={legend}
              name="legend"
              className="legend-checkbox"
              onChange={showLegend}
            />
            <label htmlFor="legend" className="underline">
              Types expériences
            </label>
          </div>
          <ul className="legend-list">
            <li className="legend-list-elements">
              <div className="legend-elements-circles bg-purple-500"></div>
              <p className="ml-2">Developement web</p>
            </li>
            <li className="legend-list-elements">
              <div className="legend-elements-circles bg-green-500"></div>
              <p className="ml-2">Restauration</p>
            </li>
            <li className="legend-list-elements">
              <div className="legend-elements-circles bg-amber-500"></div>
              <p className="ml-2">Coiffure</p>
            </li>
            <li className="legend-list-elements">
              <div className="legend-elements-circles bg-blue-600"></div>
              <p className="ml-2">Autres</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExperiencesLegend;
