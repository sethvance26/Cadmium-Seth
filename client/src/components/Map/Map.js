import * as React from "react";
import { useState } from "react";
import ReactMapGL, {Marker, GeolocateControl} from "react-map-gl";
import icon from "../../images/icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import image from "../../images/cadmium-images/logo.png";


const styles = {  

mapText: {  
 
  fontWeight: '50px',
  backgroundColor: '#e30022',
  borderRadius: '20px 20px',
  padding: '10px',
  opacity: '0.8',
  color: 'white',


}
}

const geolocateControlStyle= {
  right: 10,
  top: 10
};


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
      <center>
        <img src={image} alt="logo" className="img-logo-map" />
      </center>
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/sethjordan/cksp5cw0p3qa617o16altodwy"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
      <Marker latitude={37.60195} longitude={-77.56721} offsetLeft={-20} offsetTop={-10}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>Paint N' Sip (8/26) </p>
      </Marker>
      <Marker latitude={37.75857} longitude={-77.48118} offsetLeft={-20} offsetTop={-10}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>Ashland Fourth Fridays (8/27) </p>
      </Marker>
      <Marker latitude={37.52539} longitude={-77.43718} offsetLeft={-20} offsetTop={-10}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>Art Works: 4th Friday Art Shows (8/27) </p>
      </Marker>
      <Marker latitude={37.55262} longitude={-77.47776} offsetLeft={-20} offsetTop={-10}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>The Byrd Theatre: Sirena's Gallery (8/27) </p>
      </Marker>
      <Marker latitude={37.53827} longitude={-77.44100}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>Delta Hotel: Art n'Flow (9/04) </p>
      </Marker>
      <Marker latitude={37.543755} longitude={-77.439978}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>Eden Airlines: Blossom (8/27) </p> 
      </Marker>
      <Marker latitude={37.58512} longitude={-77.49300}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>Crossroads Art Center: All Media Show (9/17) </p> 
      </Marker>
      <Marker latitude={37.556316} longitude={-77.474146}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>VMFA: Ansel Adams (9/25) </p> 
      </Marker>
      
      <Marker latitude={37.548953} longitude={-77.447464}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>ICA: Kutunza Kila Mmoja (10/10) </p> 
      </Marker>
      <Marker latitude={37.549118} longitude={-77.453000}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>The Anderson Gallery: Jess Perlitz (9/3) </p> 
      </Marker>
      {/* <Marker latitude={37.549118} longitude={-77.453000}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <p style={styles.mapText}>Reynolds Gallery: Nancy Blum and Joseph Scheer (9/10) </p> 
      </Marker> */}
      

    </ReactMapGL>
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



