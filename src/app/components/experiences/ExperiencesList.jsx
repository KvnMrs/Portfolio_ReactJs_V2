import React from "react";

function ExperiencesList({ datas }) {
  return (
    <>
      <div className="lists-elements">
        <h1 className="text-2xl md:text-3xl text-white">{datas.entreprise}</h1>
        <h2 className="text-xl text-slate-200">{datas.lieu}</h2>
        <h2 className="text-xl text-slate-200">{datas.date}</h2>
        <h3 className="text-lg text-slate-200">{datas.statut}</h3>
        <p className="text-lg text-slate-200 italic">{datas.mission}</p>
      </div>
    </>
  );
}

export default ExperiencesList;
