import React from "react";

const SoftSkills = ({ softSkill, categorie, img }) => {
  return (
    <>
      <>
        <aside className="softSkill">
          <h4 className="title-softSkill">{softSkill}</h4>
          <div className="img-content">
            <img className="softSkill-img" alt={categorie} src={img} />
          </div>
        </aside>
      </>
    </>
  );
};

export default SoftSkills;
