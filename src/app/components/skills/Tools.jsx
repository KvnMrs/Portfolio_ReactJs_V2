import React from "react";

//Datas
import dataSkills from "../../../datas/datasSkills";

//Sub-component
import ButtonCallToActionSvg from "../../sub-components/buttons/ButtonCallToActionSvg";
import Tool from "../../sub-components/skills/Tool";

// Assets
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

function Tools({ toggleSkills }) {
  return (
    <>
      <article className="sections-sub-containers">
        <header className="sections-headers">
          <ButtonCallToActionSvg
            svg={<LeftArrowSvg />}
            fct={() => toggleSkills()}
            customClass={"mr-5"}
          />
          <h2 className="sections-titles mr-8 md:mr-16">Outils</h2>
        </header>

        <aside className="skills-list">
          {dataSkills
            .filter((category) => category.catégorie === "Outil")
            .map((tool) => (
              <Tool
                key={tool.element}
                tool={tool.element}
                categorie={tool.catégorie}
                img={tool.image}
              />
            ))}
        </aside>
      </article>
    </>
  );
}

export default Tools;
