import React from "react";

// Datas
import dataSkills from "../../../datas/datasSkills";

// Sub-components
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";

// Assets
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

const HardSkills = ({ toggleSkills }) => {
  return (
    <>
      <article className="hardSkills-container">
        <header>
          <h2 className="hardSkills-title ml-16">Compétences</h2>
          <ButtonsSvg
            svg={<LeftArrowSvg />}
            fct={() => toggleSkills()}
            customClass={"group ml-5"}
          />
        </header>

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
