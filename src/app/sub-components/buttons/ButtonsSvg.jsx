import React from "react";

function ButtonsSvg({ svg, fct, customClass }) {
  return (
    <button
      onClick={fct}
      className={
        "w-8 h-8 animate-pulse hover:animate-none hover:ring-2 duration-200 ease-in-out ring-white rounded-full" +
        ` ${customClass}`
      }
    >
      {svg}
    </button>
  );
}

export default ButtonsSvg;
