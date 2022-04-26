import { createContext, useState, useRef } from "react";

const WeatherApiContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const clearInput = useRef(null);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clearResults = () => {
    setCity([]);
    setWeather([]);
    setInput("");
  };

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=a50be4bec2a56bfb7eab9bdf5bcd4fb5`
    );
    const data = await response.json();
    if (data.cod === "404") {
      setLoading();
      setError("Weather nor found for entered city, try again!");
    } else {
      setCity(data.city);
      setWeather(data.list);
      setError("");
      setLoading();
    }
  };

  return (
    <WeatherApiContext.Provider
      value={{
        weather,
        error,
        loading,
        input,
        clearInput,
        city,
        setInput,
        inputHandler,
        getWeather,
        setLoading,
        setWeather,
        clearResults,
      }}
    >
      {children}
    </WeatherApiContext.Provider>
  );
};

export default WeatherApiContext;
