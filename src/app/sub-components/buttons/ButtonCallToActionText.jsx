import React from "react";

const ButtonCallToActionText = ({ children, text, fct, customClass, type }) => {
  return (
    <>
      <div className="absolute right-4 bottom-4">
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
        <p className="text-base">{text}</p>
      </button>
      </div>
    </>
  );
};

export default ButtonCallToActionText;
