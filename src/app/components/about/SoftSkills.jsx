import React, { useState } from "react";

// Package
import { motion } from "framer-motion";

const SoftSkills = ({ softSkill, categorie, img, openModal }) => {
  const [activeHover, setActiveHover] = useState(false);
  return (
    <>
      <>
        <motion.aside
          className="softSkill"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onHoverStart={() => {
            setActiveHover(true);
          }}
          onHoverEnd={() => {
            setActiveHover(false);
          }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          <motion.button
            type="button"
            onClick={openModal}
            whileHover={{
              scale: 1.2,
            }}
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
