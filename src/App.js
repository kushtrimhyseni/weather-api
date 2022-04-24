import WeatherInputCity from "./components/WeatherInputCity";
import { WeatherProvider } from "./components/context/WeatherApiContext";
import WeatherCard from "./components/WeatherCard";
import WeatherBanner from "./components/WeatherBanner";
import { AlertProvider } from "./components/context/AlertContext";

function App() {
  return (
    <>
      <WeatherBanner />
      <WeatherProvider>
        <AlertProvider>
          <WeatherInputCity />
          <WeatherCard />
        </AlertProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
