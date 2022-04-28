import React, { useContext, useState } from "react";
import { RecentSearchesContext } from "./context/recentsearches/RecentSearches";
import WeatherApiContext from "./context/weather/WeatherApiContext";
import CityApiContext from "./context/city/CityApiContext";

const RecentSearch = () => {
  const { searches } = useContext(RecentSearchesContext);
  const { setCapital } = useContext(CityApiContext);
  const { setCity, setWeather } = useContext(WeatherApiContext);
  const [activeIndex, setActiveIndex] = useState();

  const renderSearches = () => {
    const cityKeys = Object.keys(searches).filter((key) => key !== "");

    return cityKeys.map((cityKey) => {
      return searches[cityKey];
    });
  };

  const handleClick = (search, index) => {
    setActiveIndex(index);
    setCapital(search.city);
    setCity(search.weatherCity);
    setWeather(search.list);
  };

  return (
    <div className="container mx-auto flex gap-2 mt-8">
      <span>Recent Searches:</span>
      {renderSearches()?.map((search, index) => (
        <React.Fragment key={index}>
          <span
            onClick={() => handleClick(search, index)}
            className={`underline cursor-pointer ${
              activeIndex === index ? "text-[#800080]" : "text-[#0066CC]"
            }`}
          >
            {search.weatherCity?.name}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecentSearch;
