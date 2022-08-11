import React from "react";

function CardWeather({ datas }) {
  const { name } = datas;
  const { temp } = datas.main;
  const { description, icon } = datas.weather[0];
  const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
  return (
    <>
      {datas.main ? (
        <div className="m-1 flex items-center justify-center w-full h-full rounded-lg p-2 self-center text-center shadow-lg bg-slate-300 bg-opacity-25">
          <div className="flex flex-col w-8/12">
            <div className="font-bold text-xl">{name}</div>
            <p className="text-white text-base my-1">{temp.toFixed()} °C</p>
            <p className="text-white text-base">{description}</p>
          </div>
          <div classNma="w-4/12">
            <img className="w-32 h-32 self-center mb-1" src={iconurl} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CardWeather;
