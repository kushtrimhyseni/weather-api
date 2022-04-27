import React, { useContext, useState } from "react";
import { RecentSearchesContext } from "./context/recentsearches/RecentSearches";
import WeatherApiContext from "./context/weather/WeatherApiContext";
import CityApiContext from "./context/city/CityApiContext";

const RecentSearch = () => {
  const { searches } = useContext(RecentSearchesContext);
  const [clicked, setClicked] = useState(false);
  const { setCapital } = useContext(CityApiContext);
  const { setCity, setWeather } = useContext(WeatherApiContext);

  const renderSearches = () => {
    const cityKeys = Object.keys(searches).filter((key) => key !== "");

    return cityKeys.map((cityKey) => {
      return searches[cityKey];
    });
  };

  const handleClick = (search, index) => {
    setCapital(search.data);
    setCity(search.city);
    setWeather(search.list);
    if (clicked === index) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  if (searches) {
    renderSearches();
  }

  return (
    <div className="container mx-auto flex gap-2 mt-8">
      <span>Recent Searches:</span>
      {renderSearches()?.map((search) => (
        <>
          <div onClick={() => handleClick(search)}>
            <span
              className={`underline cursor-pointer ${
                clicked ? "text-[#800080]" : "text-[#0066CC]"
              }`}
            >
              {search.weatherCity?.name}
            </span>
          </div>
        </>
      ))}
    </div>
  );
};

export default RecentSearch;
