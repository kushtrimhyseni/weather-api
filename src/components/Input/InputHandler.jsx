import React, { useContext } from "react";
import WeatherApiContext from "../context/weather/WeatherApiContext";
import CityApiContext from "../context/city/CityApiContext";
const InputHandler = () => {
  const { clearInput, inputHandler, getWeather, input, setLoading } =
    useContext(WeatherApiContext);
  const { getCity } = useContext(CityApiContext);
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      getWeather();
      getCity(input);
      clearInput.current.value = "";
      setLoading(true);
    }
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-base-500">Enter city?</span>
      </label>
      <input
        onKeyDown={handleKeyPress}
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
