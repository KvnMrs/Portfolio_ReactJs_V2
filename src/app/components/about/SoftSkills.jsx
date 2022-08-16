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
