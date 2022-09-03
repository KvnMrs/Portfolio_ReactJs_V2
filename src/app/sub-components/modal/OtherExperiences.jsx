import React from "react";

function OtherExperiences({ datas }) {
  return (
    <>
      <div className="experience">
        <h1 className="text-2xl md:text-3xl text-white">{datas.entreprise}</h1>
        <h2 className="text-xl text-gray-400">{datas.lieu}</h2>
        <h2 className="text-xl text-gray-400">{datas.date}</h2>
        <h3 className="text-lg text-gray-400">{datas.statut}</h3>
        <p className="text-lg text-gray-400 italic">{datas.mission}</p>
      </div>
    </>
  );
}

export default OtherExperiences;
