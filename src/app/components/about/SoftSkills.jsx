import React from "react";

const SoftSkills = ({ softSkill, categorie, img, openModal }) => {
  return (
    <>
      <button
        type="button"
        className="w-10 h-10 items-center flex flex-col"
        onClick={openModal}
      >
        <div>
          <img alt={categorie} src={img} />
        </div>
        <h4 className="softSkill-title">{softSkill}</h4>
      </button>
    </>
  );
};

export default SoftSkills;
