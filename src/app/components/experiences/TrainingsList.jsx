import React from "react";

function TrainingsList({ datas }) {
  return (
    <div className="experience-training">
      <img
        alt={datas.centre}
        src={datas.image}
        className="w-20 md:w-28 mx-auto mb-6"
      />

      <h1 className="text-xl text-white min-w-max">{datas.centre}</h1>
      <h2 className="text-lg text-gray-400">{datas.lieu}</h2>
      <h2 className="text-lg text-gray-400">{datas.date}</h2>
      <h3 className="">{datas.statut}</h3>
    </div>
  );
}

export default TrainingsList;
