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
  const clickHandler = () => {
    if (input === "") {
      alert("You must type something", "error");
    } else {
      getWeather();
      clearInput.current.value = "";
      setLoading(true);
    }
  };

  const clearResults = () => {
    setCity([]);
    setWeather([]);
    setInput("");
  };

  const getWeather = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=a50be4bec2a56bfb7eab9bdf5bcd4fb5`
      );
      const data = await response.json();
      setCity(data.city);
      setWeather(data.list);
      setError("");
      setLoading();
    } catch (e) {
      setError("City not found");
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
        inputHandler,
        clickHandler,
        clearResults,
      }}
    >
      {children}
    </WeatherApiContext.Provider>
  );
};

export default WeatherApiContext;
