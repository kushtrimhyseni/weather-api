import React, { useContext } from "react";
import CityApiContext from "./context/city/CityApiContext";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const CityInfo = () => {
  const { capital, error } = useContext(CityApiContext);
  return (
    <>
      {error ? (
        <div className="flex justify-center items-center lg:items-start text-center text-base-400 text-3xl font-md font-raleway mt-8">
          {error}
        </div>
      ) : (
        <div className="w-full lg:w-1/4 mt-12">
          {capital?.map((c, index) => {
            const position = [c.latlng[0], c.latlng[1]];
            return (
              <div className="container p-6 lg:p-0" key={index}>
                <div className="card w-full lg:w-96 shadow-xl">
                  <figure>
                    <img src={c.flags.svg} alt={c.capital[0]} />
                  </figure>
                  <div className="p-6 bg-white-900">
                    <h1 className="font-raleway text-2xl">
                      Country: {c.translations.cym.common}
                    </h1>
                    <h2 className="font-raleway text-xl">
                      City: {c.capital[0]}
                    </h2>
                    <div className="flex flex-row flex-wrap font-raleway">
                      Borders :
                      {c.borders?.map((border, index) => {
                        return (
                          <span
                            key={index}
                            className="font-raleway text-md font-bold ml-2"
                          >
                            {border.split(" ")}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-raleway text-md">
                        Population: {c.population}
                      </span>
                      <span className="font-raleway text-md">
                        Currency:{" "}
                        {c.currencies[
                          Object.keys(c.currencies)[0]
                        ].name.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg">
                  <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                      position={position}
                      icon={
                        new Icon({
                          iconUrl: markerIconPng,
                          iconSize: [25, 41],
                          iconAnchor: [12, 41],
                        })
                      }
                    >
                      <Popup>
                        <span>{c.capital[0]}</span>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CityInfo;
