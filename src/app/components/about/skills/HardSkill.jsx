import React from "react";

const HardSkill = ({ hardSkill, categorie, img }) => {
  return (
    <>
      <div className="hardSkill-box">
        <img className="hardSkill-img" alt={categorie} src={img} />
        <h4 className="text-xl">{hardSkill}</h4>
      </div>
    </>
  );
};

export default HardSkill;
