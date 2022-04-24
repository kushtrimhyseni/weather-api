import React, { useContext } from "react";
import WeatherApiContext from "./context/WeatherApiContext";
import Spinner from "./Spinner";

const WeatherCard = () => {
  const { weather, error, city, loading } = useContext(WeatherApiContext);
  let id = 0;

  if (!loading) {
    return (
      <>
        {error ? (
          <div className="flex justify-center items-center text-base-400 text-3xl font-md font-raleway mt-8">
            {error}
          </div>
        ) : (
          <div className="container mx-auto flex flex-col justify-center items-center gap-4 mt-12 mb-12 p-6 lg:p-0">
            {weather?.map((list) => {
              console.log(list);
              id++;
              const today = new Date(list.dt_txt);
              let newWeatherDate = new Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
                timeStyle: "long",
              }).format(today);
              return (
                <div
                  className="card card-side bg-[#5a5a5a] shadow-xl w-full"
                  key={id}
                >
                  <div className="flex justify-center items-center bg-grey-400 w-1/3 lg:w-[200px] bg-white-900">
                    <figure>
                      <img
                        src={`http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
                        alt={list.weather[0].description}
                      />
                    </figure>
                  </div>
                  <div className="card-body grid grid-cols-1 lg:grid-cols-6 gap-4 content-between">
                    <span className="text-white-900 text-3xl font-raleway font-md text-center">
                      {city.name}
                    </span>
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-white-900 text-center">
                        {newWeatherDate.split("at")[0]}
                      </span>
                      <span className="text-white-900">
                        {newWeatherDate.split("at")[1].split("GMT")[0]}
                      </span>
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="card-title text-white-900 text-3xl">
                        {Math.floor(list.main.temp_max)} C&deg;
                      </span>
                      <span className="card-title text-white-900 text-sm flex justify-start items-end">
                        {Math.floor(list.main.temp_min)} C&deg;
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-white-900 text-xl">Feels Like</span>
                      <span className="text-white-900 text-xl">
                        {Math.floor(list.main.feels_like)} C&deg;
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-white-900 text-xl">Wind</span>
                      <span className="text-white-900 text-md">
                        {list.wind.speed} km/h
                      </span>
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-white-900 text-xl">
                        {list.weather[0].description.charAt(0).toUpperCase() +
                          list.weather[0].description.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default WeatherCard;
