import React from "react";

const SoftSkills = ({ softSkill, categorie, img, openModal }) => {
  return (
    <>
      <button
        type="button"
        className="flex flex-col gap-2 items-center justify-center"
        onClick={openModal}
      >
        <img className="w-10 h-10 md:w-14 md:h-14" alt={categorie} src={img} />
        <h4>{softSkill}</h4>
      </button>
    </>
  );
};

export default SoftSkills;
