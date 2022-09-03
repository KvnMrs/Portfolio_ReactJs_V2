import React from "react";

const TabsModalButton = ({ tab, fct, customClass }) => {
  return (
    <>
      <button
        className={`${customClass.activeClass} ` + "tab-buttons"}
        onClick={fct}
      >
        {tab}
      </button>
    </>
  );
};

export default TabsModalButton;
