import React from "react";

const ButtonCallToAction = ({ text, fct, customClass }) => {
  return (
    <>
      <button
        type="button"
        onClick={fct}
        className={"callToAction" + ` ${customClass}`}
      >
        {text}
      </button>
    </>
  );
};

export default ButtonCallToAction;
