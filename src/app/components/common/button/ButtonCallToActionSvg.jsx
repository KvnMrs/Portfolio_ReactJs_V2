import React from "react";

function ButtonCallToActionSvg({ svg, fct, customClass }) {
  return (
    <button onClick={fct} className={"callToAction-svg" + ` ${customClass}`}>
      {svg}
    </button>
  );
}

export default ButtonCallToActionSvg;
