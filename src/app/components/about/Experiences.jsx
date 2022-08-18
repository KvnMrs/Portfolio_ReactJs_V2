import React from "react";
import dataCv from "../../../datas/datasExperiences";

function Experiences() {
  return (
    <div className="information-part h-96 scrollbar-hide gradiant-dark rounded-2xl overflow-scroll divide-y divide-white mx-auto shadow-2xl ">
      {dataCv.map((experience) => (
        <>
          <div className="bg-black w-full md:w-3/4 text-center py-8 md:px-20 m-auto ">
            <h1 className=" text-2xl md:text-3xl text-white">
              {experience.entreprise}
            </h1>
            <h2 className="text-xl text-gray-400">{experience.lieu}</h2>
            <h2 className="text-xl text-gray-400">{experience.date}</h2>
            <h3 className="text-lg text-gray-400">{experience.statut}</h3>
            <p className="text-lg text-gray-400 italic">{experience.mission}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Experiences;
