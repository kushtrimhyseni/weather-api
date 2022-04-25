import React, { useContext } from "react";
import WeatherApiContext from "../context/weather/WeatherApiContext";

const InputHandler = () => {
  const { clearInput, inputHandler } = useContext(WeatherApiContext);

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-base-500">Enter city?</span>
      </label>
      <input
        ref={clearInput}
        onChange={inputHandler}
        type="text"
        placeholder="Search for weather"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default InputHandler;
