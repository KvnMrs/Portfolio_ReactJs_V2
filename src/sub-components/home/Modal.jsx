import React, { useState, useEffect } from "react";
import axios from "axios";
import CardWeather from "./CardWeather";

function Modal() {
  const [data, setData] = useState("");
  const cities = ["Nantes", "Lyon", "Paris"];

  // useEffect(() => {
  //   const API_key = "f73f4c58cad8bb66bdf181120b97237b";
  //   // setInterval(() => {}, 3600000);
  //   cities.map((city) => {
  //     axios
  //       .get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`
  //       )
  //       .then((res) => setData(res.data.main))
  //       .catch((err) => console.log("err -->", err));
  //   });
  // }, [cities]);

  // console.log("data --->", data);

  return (
    <>
      <div className="absolute z-1 bg-black w-4/6 h-4/6 p-10 rounded-2xl">
        <div className="w-full flex flex-col h-full">
          {/* SEARCH */}
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <div class="input-group relative flex items-stretch w-full mb-4 rounded">
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span
                  class="input-group-text items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                  id="basic-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* container cards */}
          <div className="flex overflow-scroll scrollbar-hide justify-center flex-wrap h-auto">
            {/* cards */}
            <CardWeather />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
