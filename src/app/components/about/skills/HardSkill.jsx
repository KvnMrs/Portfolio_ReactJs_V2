import React from "react"; // Animations
import { motion } from "framer-motion";
import { skillsBoxAnim } from "../../../animations/common/commonAnimations.js";

const HardSkill = ({ hardSkill, categorie, img }) => {
  return (
    <>
      <motion.div variants={skillsBoxAnim} className="hardSkill-box">
        <img className="hardSkill-img" alt={categorie} src={img} />
        <h4 className="text-xl">{hardSkill}</h4>
      </motion.div>
    </>
  );
};

export default HardSkill;
