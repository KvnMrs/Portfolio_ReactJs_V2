import React from "react";
import dataSkills from "../../datas/DatasSkills";

function Tools() {
  return (
    <>
      <article className="HardSkills-container">
        <h2>Outils</h2>
        <aside>
          {dataSkills
            .filter((outil) => outil.catégorie === "Outil")
            .map((el) => (
              <div className="grid-cols-1 mx-auto my-5">
                <div className="mx-5 mb-3 text-xl text-white object-center">
                  {el.element}
                </div>
                <img
                  alt={el.catégorie}
                  src={el.image}
                  className="w-16 md:w-20 h-12 md:h-16 mx-auto"
                />
              </div>
            ))}
        </aside>
      </article>
    </>
  );
}

export default Tools;
