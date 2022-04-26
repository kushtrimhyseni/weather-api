import React from "react";
import Alert from "./layouts/Alert";
import InputHandler from "./Input/InputHandler";
import SearchButton from "./Buttons/SearchButton";
import ClearButton from "./Buttons/ClearButton";

const WeatherMapApi = () => {
  return (
    <>
      <Alert />
      <div className="container mx-auto flex flex-col md: flex-row justify-center items-center">
        <InputHandler />
        <div className="flex ml-2">
          <SearchButton />
          <ClearButton />
        </div>
      </div>
    </>
  );
};

export default WeatherMapApi;
