import React from "react";

// Datas
import dataSkills from "../../../datas/datasSkills";

// Sub-component
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";

// Assets
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

function Tools({ toggleSkills }) {
  return (
    <>
      <article className="hardSkills-container">
        <header className="hardSkills-header">
          <ButtonsSvg
            svg={<LeftArrowSvg />}
            fct={() => toggleSkills()}
            customClass={"toggle-hardSkills-btn mr-5"}
          />
          <h2 className="hardSkills-title mr-8 md:mr-16">Outils</h2>
        </header>

        <aside className="skill-container">
          {dataSkills
            .filter((outil) => outil.catégorie === "Outil")
            .map((el) => (
              <div className="skill">
                <h3 className="skill-name">{el.element}</h3>
                <img className="skill-img" alt={el.catégorie} src={el.image} />
              </div>
            ))}
        </aside>
      </article>
    </>
  );
}

export default Tools;
