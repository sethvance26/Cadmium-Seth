import * as React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: 700,
    height: 700,
    latitude: 37.54129,
    longitude: -77.434769,
    zoom: 12,
  });
  
  console.log(process.env);

  console.log("map", process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default Map;
