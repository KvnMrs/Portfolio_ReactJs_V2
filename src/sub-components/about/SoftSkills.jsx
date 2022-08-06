import React from "react";
import dataSkills from "../../datas/DatasSkills";

const SoftSkills = () => {
  return (
    <>
      {dataSkills
        .filter((atout) => atout.catégorie === "Atout")
        .map((el) => (
          <>
            <aside className="softskill">
              <h4>{el.element}</h4>
              <div>
                <img alt={el.catégorie} src={el.image} />
              </div>
            </aside>
          </>
        ))}
    </>
  );
};

export default SoftSkills;
