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
    <div className="map">
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
    </div>
  );
}

export default Map;

// // function to plot seed data on map
//  function plotSeedData(map, seedData) {


//   // create a new layer for seed data
//   const layer = new mapboxgl.GeoJSONLayer(seedData);

//   // add the layer to the map
//   map.addLayer(layer);

//   // add a popup for seed data
//   map.on('click', function(e) {
//     layer.setFilter('!within', e.point);
//   });
//  }



