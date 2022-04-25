import WeatherInputCity from "./components/WeatherInputCity";
import { WeatherProvider } from "./components/context/WeatherApiContext";
import WeatherCard from "./components/WeatherCard";
import WeatherBanner from "./components/WeatherBanner";
import { AlertProvider } from "./components/context/AlertContext";
import CityInfo from "./components/CityInfo";

function App() {
  return (
    <>
      <WeatherBanner />
      <WeatherProvider>
        <AlertProvider>
          <WeatherInputCity />
          <div className="container mx-auto flex flex-col lg:flex-row gap-4">
            <WeatherCard />
            <CityInfo />
          </div>
        </AlertProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
