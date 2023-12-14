import React from "react";
import "./weather.css"
import { useState } from "react";


const Weather = () => {
  const [city, setCity] = useState("");
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(city);
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="city"
                value={city}
                onChange={changeHandler}
              />
              <br />
              <br />
              <input type="submit" value="Get Temperature" />
            </form>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Weather;
