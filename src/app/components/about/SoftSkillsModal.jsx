import React from "react";

//Datas
import dataSkills from "../../../datas/datasSkills";

const SoftSkillsModal = () => {
  return (
    <>
      <div className="modal-SoftSkills">
        {dataSkills
          .filter((atout) => atout.catégorie === "Atout")
          .map((skill) => (
            <>
              <div className="modal-softSkill">
                <div className="modal-softSkill-img-part">
                  <img className="modal-softSkill-img " src={skill.image} />
                </div>

                <div className="modal-softSkill-description-part">
                  <h3 className="modal-softSkill-title">{skill.element}</h3>
                  <p className="modal-softSkill-description">
                    {skill.description}
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default SoftSkillsModal;
