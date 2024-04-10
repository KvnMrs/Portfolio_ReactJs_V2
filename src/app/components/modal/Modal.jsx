import React, { useState, useEffect } from "react";
// Packages
import { motion } from "framer-motion";
// Components
import ModalTabButtons from "./ModalTabButtons";
import ModalContent from "./ModalContent";
// Animations
import { modalAnim } from "../../animations/aboutAnimation";

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

  const activeClass = "bg-cyan-800 border-b border-white ring-2";

  const toggleContent = (activeTab) => {
    if (activeTab === 1) return setActiveContent(component1);
    if (activeTab === 2) return setActiveContent(component2);
    if (activeTab === 3) return setActiveContent(component3);
  };

  useEffect(() => {
    toggleContent(activeTab);
  }, [activeTab]);

  return (
    <>
      <motion.div
        className="modal-container"
        variants={modalAnim}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="modal-sub-container">
          <div className="content-tabs">
            <ModalTabButtons
              customClass={activeTab !== 1 ? "" : { activeClass }}
              tab={tab}
              fct={() => setActiveTab(1)}
            />
            {tab2 && (
              <ModalTabButtons
                customClass={activeTab !== 2 ? "" : { activeClass }}
                tab={tab2}
                fct={() => setActiveTab(2)}
              />
            )}
            {tab3 && (
              <ModalTabButtons
                customClass={activeTab !== 3 ? "" : { activeClass }}
                tab={tab3}
                fct={() => setActiveTab(3)}
              />
            )}
            <button onClick={showModal} className="button-close">
              x
            </button>
          </div>
          {<ModalContent content={activeContent} />}
        </div>
      </motion.div>
    </>
  );
}

export default Modal;
