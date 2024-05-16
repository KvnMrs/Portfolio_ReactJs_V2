import React from "react";
import "./Skill.css"; // Importez le fichier CSS

const SoftSkill = ({ softSkill, categorie, img }) => {
  return (
    <>
      <div
        className={
          "min-w-[10rem] flex flex-col gap-4 items-center justify-center rounded-lg lg:bg-[#0d152d] p-4 pb-8 lg:shadow-xl | lg:gap-8"
        }
      >
        <div className="soft-skill-image w-16 h-16 content-center cursor-pointer  duration-500 ease-in | lg:w-28 lg:h-28 lg:p-6 lg:bg-slate-500 lg:hover:bg-slate-700   ">
          <img alt={categorie} src={img} />
        </div>

        <h4 className="text-xl">{softSkill}</h4>
      </div>
    </>
  );
};

export default SoftSkill;
