import React from "react";

const SoftSkills = ({ softSkill, categorie, img }) => {
  return (
    <>
      <>
        <aside className="softSkill">
          <h4 className="softSkill-title">{softSkill}</h4>
          <div className="softSkill-img">
            <img alt={categorie} src={img} />
          </div>
        </aside>
      </>
    </>
  );
};

export default SoftSkills;
