import React from "react";

function Experience({ datas }) {
  return (
    <>
      <div className=" w-full md:w-3/4 text-center py-8 md:px-20 m-auto ">
        <h1 className=" text-2xl md:text-3xl text-white">{datas.entreprise}</h1>
        <h2 className="text-xl text-gray-400">{datas.lieu}</h2>
        <h2 className="text-xl text-gray-400">{datas.date}</h2>
        <h3 className="text-lg text-gray-400">{datas.statut}</h3>
        <p className="text-lg text-gray-400 italic">{datas.mission}</p>
      </div>
    </>
  );
}

export default Experience;
