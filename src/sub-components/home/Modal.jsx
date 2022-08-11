import React from "react";
import WeatherCity from "./WeatherCity";

function Modal() {
  return (
    <>
      <div className="absolute z-1 bg-gradient-to-r from-cyan-800 to-cyan-200 w-4/6 h-4/6 p-10 rounded-2xl">
        <WeatherCity />
      </div>
    </>
  );
}

export default Modal;
