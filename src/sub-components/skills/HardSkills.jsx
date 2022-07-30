import React from "react";
import dataSkills from "../../datas/DatasSkills";

const HardSkills = () => {
  return (
    <>
      <article className="HardSkills-container">
        <h2>Compétences</h2>
        <aside>
          {dataSkills
            .filter((compétence) => compétence.catégorie === "Compétence")
            .map((el) => (
              <div>
                <h3>{el.element}</h3>
                <img alt={el.catégorie} src={el.image} />
              </div>
            ))}
        </aside>
      </article>
    </>
  );
};

export default HardSkills;
