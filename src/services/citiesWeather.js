import axios from "axios";

const API_key = "f73f4c58cad8bb66bdf181120b97237b";

export const fetchWeatherCities = (city) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`
    )
    .then((res) => res.data)
    .catch((err) => console.log("err -->", err));
};
