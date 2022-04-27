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
    if (capital) {
      setSearches({
        ...searches,
        [input]: { ...searches[input], city: capital },
      });
    }
  }, [capital, input, searches, setSearches]);

  const getCity = async (input) => {
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
