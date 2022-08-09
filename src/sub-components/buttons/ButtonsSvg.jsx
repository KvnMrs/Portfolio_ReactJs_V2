import React from "react";

function ButtonsSvg({ svg, fct }) {
  return (
    <button onClick={fct} className="w-10 h-10">
      {svg}
    </button>
  );
}

export default ButtonsSvg;
