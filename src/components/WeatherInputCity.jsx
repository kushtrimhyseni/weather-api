import React, { useContext } from "react";
import Alert from "./layouts/Alert";
import AlertContext from "./context/AlertContext";
import WeatherApiContext from "./context/WeatherApiContext";

const WeatherMapApi = () => {
  const {
    clearInput,
    inputHandler,
    clearResults,
    input,
    getWeather,
    setLoading,
    city,
    weather,
  } = useContext(WeatherApiContext);
  const { setAlert } = useContext(AlertContext);

  const clickHandler = () => {
    if (input === "") {
      setAlert("City cannot be empty", "error");
    } else {
      getWeather();
      clearInput.current.value = "";
      setLoading(true);
    }
  };

  return (
    <>
      <Alert />
      <div className="container mx-auto flex flex-col md: flex-row justify-center items-center">
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
        <div className="flex gap-2">
          <button onClick={clickHandler} className="btn btn-active mt-4">
            Search
          </button>
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
        </div>
      </div>
    </>
  );
};

export default WeatherMapApi;
