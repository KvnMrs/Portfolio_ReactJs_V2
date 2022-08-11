import React from "react";

function ButtonsSvg({ svg, fct }) {
  return (
    <button
      onClick={fct}
      className="w-8 h-8 animate-pulse hover:animate-none hover:bg-white rounded-full"
    >
      {svg}
    </button>
  );
}

export default ButtonsSvg;
