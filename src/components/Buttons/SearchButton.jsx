import React, { useContext } from "react";
import WeatherApiContext from "../context/weather/WeatherApiContext";
import CityApiContext from "../context/city/CityApiContext";
import AlertContext from "../context/alert/AlertContext";

const SearchButton = () => {
  const { setAlert } = useContext(AlertContext);
  const { input, getWeather, setLoading, clearInput } =
    useContext(WeatherApiContext);
  const { getCity } = useContext(CityApiContext);

  const clickHandler = () => {
    if (input === "") {
      setAlert("City cannot be empty", "error");
    } else {
      getWeather();
      getCity(input);
      clearInput.current.value = "";
      setLoading(true);
    }
  };
  return (
    <div className="ml-2">
      <button onClick={clickHandler} className="btn btn-active mt-4">
        Search
      </button>
    </div>
  );
};

export default SearchButton;
