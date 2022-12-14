import React, { useState, useEffect } from "react";

// Somponents
import CardWeather from "./CardWeather";

// Service
import { fetchWeatherCities } from "../../../services/citiesWeather";

function WeatherCity() {
  const [datas, setDatas] = useState([]);
  const [location, setLocation] = useState("");
  const city = "Nantes";

  useEffect(() => {
    fetchWeatherCities(city).then((data) => setDatas(data));
    return () => {
      clearInterval();
    };
  }, []);

  const searchLocation = (event) => {
    if (event.key === "Enter" && location !== "") {
      fetchWeatherCities(location).then((data) => setDatas(data));
      setLocation("");
    }
  };
  return (
    <>
      {" "}
      <div className="w-full h-modal-content pt-6 flex flex-col bg-[url('https://static9.depositphotos.com/1003434/1158/i/450/depositphotos_11586368-stock-photo-beautiful-sky.jpg')] bg-cover bg-no-repeat  rounded-2xl">
        {/* SEARCH */}
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex items-stretch w-full mb-4 rounded">
              <input
                type="text"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search location"
                aria-label="Search"
                aria-describedby="button-addon2"
                value={location}
                onKeyPress={(event) => searchLocation(event)}
                onChange={(event) => setLocation(event.target.value)}
              />
              <span
                className="input-group-text items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                id="basic-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
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
        <div className="flex p-2 justify-center h-full">
          {/* cards */}
          {datas.main ? <CardWeather key={datas.name} datas={datas} /> : null}
        </div>
      </div>
    </>
  );
}

export default WeatherCity;
