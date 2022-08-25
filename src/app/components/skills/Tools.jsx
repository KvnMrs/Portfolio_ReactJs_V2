import React from "react";

// Datas
import dataSkills from "../../../datas/datasSkills";

// Sub-component
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";

// Assets
import RightArrowSvg from "../../../assets/svg/global/RightArrowSvg";

function Tools({ toggleSkills }) {
  return (
    <>
      <article className="hardSkills-container">
        <header>
          <ButtonsSvg
            svg={<RightArrowSvg />}
            fct={() => toggleSkills()}
            customClass={"group ml-5"}
          />
          <h2 className="mr-20">Outils</h2>
        </header>

        <aside>
          {dataSkills
            .filter((outil) => outil.catégorie === "Outil")
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
}

export default Tools;
