import React from "react";
import "./Skill.css"; // Importez le fichier CSS

const SoftSkill = ({ softSkill, categorie, img }) => {
  return (
    <>
      <div className="softSkill-box">
        <div className="softSkill-img softSkill-img-polygon">
          <img alt={categorie} src={img} />
        </div>

        <h4 className="text-xl">{softSkill}</h4>
      </div>
    </>
  );
};

export default SoftSkill;
