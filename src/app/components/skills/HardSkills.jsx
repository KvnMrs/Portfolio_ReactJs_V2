import React from "react";

// Datas
import dataSkills from "../../../datas/datasSkills";

// Sub-components
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";

// Assets
import RightArrowSvg from "../../../assets/svg/global/RightArrowSvg";

const HardSkills = ({ toggleSkills }) => {
  return (
    <>
      <article className="hardSkills-container">
        <header className="hardSkills-header">
          <h2 className="hardSkills-title ml-16">Compétences</h2>
          <ButtonsSvg
            svg={<RightArrowSvg />}
            fct={() => toggleSkills()}
            customClass={"toggle-hardSkills-btn ml-5"}
          />
        </header>

        <aside className="skill-container">
          {dataSkills
            .filter((compétence) => compétence.catégorie === "Compétence")
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
};

export default HardSkills;
