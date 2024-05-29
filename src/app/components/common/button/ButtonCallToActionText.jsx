import React from "react";

const ButtonCallToActionText = ({ children, text, fct, customClass, type }) => {
  return (
    <>
      <button
        type={type ? type : "button"}
        onClick={fct ? fct : null}
        className={
          customClass
            ? `callToAction-text ${customClass} shadow-xl text-lg md:text-xl hover:border-sky-500 hover:bg-opacity-40 hover:shadow-lg hover:bg-slate-700 hover:shadow-sky-900 duration-300 ease-in`
            : "callToAction-text shadow-xl text-lg md:text-xl hover:border-sky-500 hover:bg-opacity-40 hover:shadow-lg hover:bg-slate-700 hover:shadow-sky-900 duration-300 ease-in"
        }
      >
        {children ? children : null}
        {text}
      </button>
    </>
  );
};

export default ButtonCallToActionText;
