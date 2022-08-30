import React from "react";

// Datas
import dataSkills from "../../../datas/datasSkills";

// Sub-components
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";
import HardSkill from "../../sub-components/skills/HardSkill";

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
            customClass={"ml-5"}
          />
        </header>

        <aside className="skill-container">
          {dataSkills
            .filter((category) => category.catégorie === "Compétence")
            .map((hardSkill) => (
              <HardSkill
                key={hardSkill.element}
                hardSkill={hardSkill.element}
                catégorie={hardSkill.catégorie}
                img={hardSkill.image}
              />
            ))}
        </aside>
      </article>
    </>
  );
};

export default HardSkills;
