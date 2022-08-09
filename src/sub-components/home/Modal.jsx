import React, { useState, useEffect } from "react";
import axios from "axios";

function Modal() {
  const [data, setData] = useState("");
  const cities = ["Nantes", "Lyon", "Paris"];

  useEffect(() => {
    const API_key = "f73f4c58cad8bb66bdf181120b97237b";
    // setInterval(() => {}, 3600000);
    cities.map((city) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`
        )
        .then((res) => setData(res.data.main))
        .catch((err) => console.log("err -->", err));
    });
  }, [cities]);

  console.log("data --->", data);

  return (
    <>
      <div className=" absolute z-1 bg-black w-5/6 h-5/6">
        {/* {test.map((el) => el.name)} */}
      </div>
    </>
  );
}

export default Modal;
