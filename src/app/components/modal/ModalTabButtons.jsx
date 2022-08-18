import React from "react";

const TabsModalButton = ({ tab, fct }) => {
  return (
    <>
      <button className="tab-buttons" onClick={fct}>
        {tab}
      </button>
    </>
  );
};

export default TabsModalButton;
