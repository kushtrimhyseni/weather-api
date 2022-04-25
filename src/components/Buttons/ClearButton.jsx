import React, { useContext } from "react";
import WeatherApiContext from "../context/weather/WeatherApiContext";
import CityApiContext from "../context/city/CityApiContext";
const ClearButton = () => {
  const { city, weather, setWeather, setInput } = useContext(WeatherApiContext);
  const { setCapital, setError } = useContext(CityApiContext);

  const clearResults = () => {
    setCapital([]);
    setWeather([]);
    setError("");
    setInput("");
  };
  return (
    <>
      {city?.length > 0 || weather?.length > 0 ? (
        <button
          onClick={clearResults}
          className="btn btn-active btn-ghost mt-4"
        >
          Clear
        </button>
      ) : (
        false
      )}
    </>
  );
};

export default ClearButton;
