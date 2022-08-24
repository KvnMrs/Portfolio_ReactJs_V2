import React from "react";

// Datas
import dataSkills from "../../../datas/datasSkills";

const SoftSkills = () => {
  return (
    <>
      {dataSkills
        .filter((atout) => atout.catégorie === "Atout")
        .map((el) => (
          <>
            <aside className="softSkill">
              <h4 className="title-softSkill">{el.element}</h4>
              <div className="img-content">
                <img
                  className="softSkill-img"
                  alt={el.catégorie}
                  src={el.image}
                />
              </div>
            </aside>
          </>
        ))}
    </>
  );
};

export default SoftSkills;
