import React, { useContext } from "react";
import Spinner from "./Spinner";
// import Alert from "./layouts/Alert";
// import AlertContext from "./context/AlertContext";
import WeatherApiContext from "./context/WeatherApiContext";

const WeatherMapApi = () => {
  const {
    loading,
    clearInput,
    inputHandler,
    clickHandler,
    clearResults,
    weather,
    city,
  } = useContext(WeatherApiContext);
  // const { setAlert } = useContext(AlertContext);

  if (!loading) {
    return (
      <>
        {/* <Alert /> */}
        <div className="container mx-auto flex flex-col md: flex-row justify-center items-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white-900">Enter city?</span>
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
            {city.length > 0 || weather.length > 0 ? (
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
  } else {
    return <Spinner />;
  }
};

export default WeatherMapApi;
