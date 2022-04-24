import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiDayCloudyHigh,
  WiDayRainMix,
  WiDayThunderstorm,
  WiNightAltSnowWind,
} from "react-icons/wi";

const WeatherBanner = () => {
  return (
    <div className="bg-[#fff] h-auto flex flex-col gap-4 justify-center items-center shadow-lg text-black-900 text-3xl p-6">
      <span className="font-indie text-4xl">Weather Forecast</span>
      <div className="flex">
        <WiDaySunny />
        <WiCloud />
        <WiDayCloudyHigh />
        <WiDayRainMix />
        <WiDayThunderstorm />
        <WiNightAltSnowWind />
      </div>
    </div>
  );
};

export default WeatherBanner;
