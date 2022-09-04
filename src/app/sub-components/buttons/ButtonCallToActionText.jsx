import React from "react";

const ButtonCallToActionText = ({ children, text, fct, customClass, type }) => {
  return (
    <>
      <button
        type={type ? type : "button"}
        onClick={fct ? fct : null}
        className={
          customClass
            ? "callToAction-text" + ` ${customClass}`
            : "callToAction-text"
        }
      >
        {children ? children : null}
        <p className="text-sm md:text-lg">{text}</p>
      </button>
    </>
  );
};

export default ButtonCallToActionText;
