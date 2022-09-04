import React from "react";

function ButtonsSvg({ svg, fct, customClass }) {
  return (
    <button onClick={fct} className={"callToAction-svg" + ` ${customClass}`}>
      {svg}
    </button>
  );
}

export default ButtonsSvg;
