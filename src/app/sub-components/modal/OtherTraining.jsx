import React from "react";

function OtherTraining({ datas }) {
  return (
    <div>
      <div className=" w-3/4 text-center py-8 md:px-20 m-auto ">
        <img
          alt={datas.centre}
          src={datas.image}
          className="w-40 md:w-48 mx-auto mb-6"
        />

        <h1 className="text-2xl text-white">{datas.centre}</h1>
        <h2 className="text-xl text-gray-400">{datas.lieu}</h2>
        <h2 className="text-xl text-gray-400">{datas.date}</h2>
        <h3 className="text-xl text-gray-400 italic">{datas.statut}</h3>
      </div>
    </div>
  );
}

export default OtherTraining;
