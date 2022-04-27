import WeatherInputCity from "./components/WeatherInputCity";
import { WeatherProvider } from "./components/context/weather/WeatherApiContext";
import WeatherCard from "./components/WeatherCard";
import WeatherBanner from "./components/WeatherBanner";
import { AlertProvider } from "./components/context/alert/AlertContext";
import CityInfo from "./components/CityInfo";
import { CityApiProvider } from "./components/context/city/CityApiContext";
import { RecentSearchesProvider } from "./components/context/recentsearches/RecentSearches";
import RecentSearch from "./components/RecentSearch";

function App() {
  return (
    <>
      <WeatherBanner />
      <RecentSearchesProvider>
        <WeatherProvider>
          <AlertProvider>
            <CityApiProvider>
              <RecentSearch />
              <WeatherInputCity />
              <div className="container mx-auto flex flex-col justify-center lg:flex-row gap-4">
                <WeatherCard />
                <CityInfo />
              </div>
            </CityApiProvider>
          </AlertProvider>
        </WeatherProvider>
      </RecentSearchesProvider>
    </>
  );
}

export default App;
