import React from "react";

// Packages
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Modal({ showModal, component, tab }) {
  return (
    <>
      <div className="modal-container">
        <div className="modal-sub-container">
          <Tabs className={"h-auto"}>
            <TabList className={"mb-1 pb-1"}>
              <div className="flex">
                <Tab>{tab}</Tab>

                <button onClick={showModal} className="button-close">
                  x
                </button>
              </div>
            </TabList>

            <TabPanel>{component}</TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Modal;
