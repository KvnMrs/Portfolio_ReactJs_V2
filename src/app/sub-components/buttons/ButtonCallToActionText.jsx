import React from "react";

const ButtonCallToActionText = ({ text, fct, customClass, type }) => {
  return (
    <>
      <button
        type={type ? type : "button"}
        onClick={fct}
        className={"callToAction-text" + ` ${customClass}`}
      >
        {text}
      </button>
    </>
  );
};

export default ButtonCallToActionText;
