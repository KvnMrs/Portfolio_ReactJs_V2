import React from "react";

function ButtonsSvg({ svg, fct, customClass }) {
  return (
    <button
      onClick={fct}
      className={
        "w-10 h-10 p-3 animate-pulse duration-500 ease-in-out rounded-full hover:animate-none hover:ring-2" +
        ` ${customClass}`
      }
    >
      {svg}
    </button>
  );
}

export default ButtonsSvg;
