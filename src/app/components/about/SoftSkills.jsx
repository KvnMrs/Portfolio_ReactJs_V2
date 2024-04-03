import React from "react";

const SoftSkills = ({ softSkill, categorie, img, openModal }) => {
  return (
    <>
      <button
        type="button"
        className="m-2 flex flex-col gap-2 items-center"
        onClick={openModal}
      >
        <div>
          <img className="w-10 h-10" alt={categorie} src={img} />
        </div>
        <h4>{softSkill}</h4>
      </button>
    </>
  );
};

export default SoftSkills;
