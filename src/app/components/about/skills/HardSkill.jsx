import React from "react";

const HardSkill = ({ hardSkill, categorie, img }) => {
  return (
    <>
      <div className={" flex flex-col gap-4 items-center justify-center  "}>
        <img
          className="w-14 h-14 cursor-pointer | lg:w-24 lg:h-24 lg:p-4 content-center "
          alt={categorie}
          src={img}
        />
        <h4 className="text-xl">{hardSkill}</h4>
      </div>
    </>
  );
};

export default HardSkill;
