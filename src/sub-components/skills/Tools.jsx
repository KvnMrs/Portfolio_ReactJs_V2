import React from "react";
import dataSkills from "../../datas/DatasSkills";

function Tools() {
  return (
    <>
      {" "}
      <h2 className="text-white text-3xl mb-6 pb-2 border-b w-32 mx-auto">
        Outils
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-content-center my-5 flex-wrap">
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
      </div>
    </>
  );
}

export default Tools;
