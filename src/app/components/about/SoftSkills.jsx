import React, { useState } from "react";

// Package
import { motion } from "framer-motion";

// Animations
import { softSkillHoverAnim } from "../../animations/aboutAnimation";

const SoftSkills = ({ softSkill, categorie, img, openModal }) => {
  const [activeHover, setActiveHover] = useState(false);
  return (
    <>
      <>
        <motion.aside
          className="softSkill"
          onHoverStart={() => {
            setActiveHover(true);
          }}
          onHoverEnd={() => {
            setActiveHover(false);
          }}
        >
          <motion.button
            type="button"
            onClick={openModal}
            variants={softSkillHoverAnim}
            whileHover="whileHover"
          >
            <h4 className="softSkill-title">{softSkill}</h4>

            <div
              className={
                activeHover ? "softSkill-img border-cyan-500" : "softSkill-img"
              }
            >
              <img alt={categorie} src={img} />
            </div>
          </motion.button>
        </motion.aside>
      </>
    </>
  );
};

export default SoftSkills;
