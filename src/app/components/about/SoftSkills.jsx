import React from "react";

// Package
import { motion } from "framer-motion";

const SoftSkills = ({ softSkill, categorie, img }) => {
  return (
    <>
      <>
        <motion.aside
          className="softSkill"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h4 className="softSkill-title">{softSkill}</h4>
          <div className="softSkill-img">
            <img alt={categorie} src={img} />
          </div>
        </motion.aside>
      </>
    </>
  );
};

export default SoftSkills;
