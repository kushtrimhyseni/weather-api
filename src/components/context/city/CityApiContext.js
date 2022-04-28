/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useContext, useEffect } from "react";
import { RecentSearchesContext } from "../recentsearches/RecentSearches";
import WeatherApiContext from "../weather/WeatherApiContext";

const CityApiContext = createContext();

export const CityApiProvider = ({ children }) => {
  const [capital, setCapital] = useState([]);
  const [error, setError] = useState("");
  const { searches, setSearches } = useContext(RecentSearchesContext);
  const { input } = useContext(WeatherApiContext);

  useEffect(() => {
    if (capital?.length) {
      setSearches({
        ...searches,
        [capital[0].capital[0]]: {
          ...searches[capital[0].capital[0]],
          city: capital,
        },
      });
    }
  }, [capital]);

  const getCity = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/capital/${input}
      `
    );
    const data = await response.json();
    if (data.status === 404) {
      setError("No data available for this city !");
    } else {
      setCapital(data);
      setError("");
    }
  };
  return (
    <CityApiContext.Provider
      value={{ capital, error, getCity, setCapital, setError }}
    >
      {children}
    </CityApiContext.Provider>
  );
};

export default CityApiContext;
