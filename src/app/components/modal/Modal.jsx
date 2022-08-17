import React from "react";

// Packages
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Modal({ showModal, component, component2, tab, tab2 }) {
  return (
    <>
      <div className="modal-container">
        <div className="modal-sub-container">
          <Tabs>
            <TabList className={"mb-1 pb-1"}>
              <div className="flex">
                <Tab>{tab}</Tab>
                <Tab>{tab2}</Tab>

                <button onClick={showModal} className="button-close">
                  x
                </button>
              </div>
            </TabList>

            <TabPanel>{component}</TabPanel>
            <TabPanel>{component2}</TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Modal;
