import React from "react";

// Package
import { motion } from "framer-motion";

// Animations
import { legendAnim } from "../../animations/experiencesAnimation";

const ExperiencesLegend = ({ legend, showLegend }) => {
  return (
    <>
      <motion.div
        className="legend-container"
        variants={legendAnim}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
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
            <label htmlFor="legend" className=" text-sm lg:text-base underline">
              Types expériences
            </label>
          </div>
          <ul className="legend-list">
            <li className="legend-list-elements">
              <div className="legend-elements-circle bg-purple-500"></div>
              <p className="legend-elements-text">Developement web</p>
            </li>
            <li className="legend-list-elements">
              <div className="legend-elements-circle bg-green-500"></div>
              <p className="legend-elements-text">Restauration</p>
            </li>
            <li className="legend-list-elements">
              <div className="legend-elements-circle bg-amber-500"></div>
              <p className="legend-elements-text">Coiffure</p>
            </li>
            <li className="legend-list-elements">
              <div className="legend-elements-circle bg-blue-600"></div>
              <p className="legend-elements-text">Autres</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default ExperiencesLegend;
