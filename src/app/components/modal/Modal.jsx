import React from "react";

// Packages
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Modal({ showModal, component, tab }) {
  return (
    <>
      <div className="absolute modal-center z-1 p-2 bg-gradient-to-r from-cyan-800 to-cyan-200 w-4/6 h-auto rounded-2xl">
        <Tabs className={"h-auto"}>
          <TabList className={"mb-1 pb-1"}>
            <div className="flex">
              <Tab>{tab}</Tab>

              <button onClick={showModal} className=" w-9 ml-auto">
                x
              </button>
            </div>
          </TabList>

          <TabPanel>{component}</TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default Modal;
