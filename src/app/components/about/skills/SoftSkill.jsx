import React from "react";
import "./Skill.css";
// Animations
import { motion } from "framer-motion";
import { skillsBoxAnim } from "../../../animations/common/commonAnimations.js";

const SoftSkill = ({ softSkill, categorie, img }) => {
  return (
    <>
      <motion.div variants={skillsBoxAnim} className="softSkill-box">
        <div className="softSkill-img softSkill-img-polygon">
          <img alt={categorie} src={img} />
        </div>

        <h4 className="text-xl">{softSkill}</h4>
      </motion.div>
    </>
  );
};

export default SoftSkill;
