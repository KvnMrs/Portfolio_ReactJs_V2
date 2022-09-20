import React from "react";

// Package
import { motion } from "framer-motion";

//Datas
import dataSkills from "../../../datas/datasSkills";

// Animations
import {
  modalSoftSkillsAnim,
  modalSoftSkillAnim,
} from "../../animations/aboutAnimation";

const SoftSkillsModal = () => {
  return (
    <>
      <motion.div
        className="modal-SoftSkills"
        variants={modalSoftSkillsAnim}
        initial="initial"
        animate="animate"
      >
        {dataSkills
          .filter((atout) => atout.catégorie === "Atout")
          .map((skill, index) => (
            <>
              <motion.div
                key={index}
                className="modal-softSkill"
                variants={modalSoftSkillAnim}
              >
                <div className="modal-softSkill-img-part">
                  <img className="modal-softSkill-img " src={skill.image} />
                </div>

                <div className="modal-softSkill-description-part">
                  <h3 className="modal-softSkill-title">{skill.element}</h3>
                  <p className="modal-softSkill-description">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            </>
          ))}
      </motion.div>
    </>
  );
};

export default SoftSkillsModal;
