import React from "react";

function HardSkill({ hardSkill, catégorie, img }) {
  return (
    <>
      <div className="skill">
        <h3 className="skill-name">{hardSkill}</h3>
        <img className="skill-img" alt={catégorie} src={img} />
      </div>
    </>
  );
}

export default HardSkill;
