import React, { useState, useEffect } from "react";

// Components
import ModalTabButtons from "./ModalTabButtons";
import ModalContent from "./ModalContent";

function Modal({
  showModal,
  component1,
  component2,
  component3,
  tab,
  tab2,
  tab3,
}) {
  const [activeTab, setActiveTab] = useState(1);
  const [activeContent, setActiveContent] = useState(component1);

  useEffect(() => {
    toggleContent(activeTab);
  }, [activeTab]);

  const toggleContent = (activeTab) => {
    if (activeTab === 1) return setActiveContent(component1);
    if (activeTab === 2) return setActiveContent(component2);
    if (activeTab === 3) return setActiveContent(component3);
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-sub-container">
          <div className="content-tabs">
            <ModalTabButtons tab={tab} fct={() => setActiveTab(1)} />
            <ModalTabButtons tab={tab2} fct={() => setActiveTab(2)} />
            <ModalTabButtons tab={tab3} fct={() => setActiveTab(3)} />
            <button onClick={showModal} className="button-close">
              x
            </button>
          </div>
          {<ModalContent content={activeContent} />}
        </div>
      </div>
    </>
  );
}

export default Modal;
