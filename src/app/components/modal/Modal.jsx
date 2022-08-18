import React, { useState } from "react";

// Components
import ModalTabButtons from "./ModalTabButtons";
import ModalContent from "./ModalContent";

function Modal({ showModal, component, component2, tab, tab2 }) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="modal-container">
        <div className="modal-sub-container">
          <div className="content-tabs">
            <ModalTabButtons tab={tab} fct={() => setActiveTab(1)} />
            <ModalTabButtons tab={tab2} fct={() => setActiveTab(2)} />
            <button onClick={showModal} className="button-close">
              x
            </button>
          </div>
          {activeTab === 1 ? (
            <ModalContent content={component} />
          ) : (
            <ModalContent content={component2} />
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
