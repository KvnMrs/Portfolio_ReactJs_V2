import React from "react";

function CardWeather() {
  return (
    <>
      <div class="m-1 flex h-44 w-64 rounded-lg text-center shadow-lg bg-slate-300 bg-opacity-25">
        <div class="px-6 py-4 self-center">
          <div class="font-bold  text-xl">Mountain</div>
          <p class="text-white text-base">25 deg</p>
          <p class="text-white text-base">autre texte</p>
        </div>
        <img class="w-20 h-20 self-center mx-auto bg-white" />
      </div>
    </>
  );
}

export default CardWeather;
