import React from "react";

// Package
import { motion } from "framer-motion";

//Datas
import dataSkills from "../../../datas/datasSkills";

const SoftSkillsModal = () => {
  return (
    <>
      <div className="modal-SoftSkills">
        {dataSkills
          .filter((atout) => atout.catégorie === "Atout")
          .map((skill, index) => (
            <>
              <motion.div
                className="modal-softSkill"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 + `${index / 2}`, duration: 0.7 }}
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
      </div>
    </>
  );
};

export default SoftSkillsModal;
