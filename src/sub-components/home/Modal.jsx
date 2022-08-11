import React from "react";
import WeatherCity from "./WeatherCity";
import Profile from "./Profile";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Modal({ showModal }) {
  return (
    <>
      <div className="absolute z-1 p-2 bg-gradient-to-r from-cyan-800 to-cyan-200 w-4/6 h-auto rounded-2xl">
        <Tabs className={"h-auto"}>
          <TabList className={"mb-1 pb-1"}>
            <div className="flex">
              <Tab>Profil</Tab>
              <Tab>Méteo</Tab>

              <button onClick={showModal} className=" w-9 ml-auto">
                x
              </button>
            </div>
          </TabList>

          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <WeatherCity />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default Modal;
