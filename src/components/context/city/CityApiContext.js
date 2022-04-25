import { createContext, useState } from "react";

const CityApiContext = createContext();

export const CityApiProvider = ({ children }) => {
  const [capital, setCapital] = useState([]);
  const [error, setError] = useState("");

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
