import WeatherMapApi from "./components/WeatherMapApi";
import { AlertProvider } from "./components/context/AlertContext";
import { WeatherProvider } from "./components/context/WeatherApiContext";
import WeatherCard from "./components/WeatherCard";
import WeatherBanner from "./components/WeatherBanner";

function App() {
  return (
    <>
      <WeatherBanner />
      <WeatherProvider>
        <AlertProvider>
          <WeatherMapApi />
          <WeatherCard />
        </AlertProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
