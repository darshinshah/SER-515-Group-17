import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '1000px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const position = [{
    lat: 37.772,
    lng: -122.214
  }, {
    lat: 38.772,
    lng: -128.214
  } ]

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
  const clicked = (x)=> {
        console.log("clicked", x);
  }

function Maps() {
  return (
    <LoadScript
      googleMapsApiKey="
      AIzaSyB7apJEF8DQVz90lnXzx7dri-OFyBlWIOg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
          {position.map((x, index)=>(
              <Marker key = {index} position={x} onClick = {() =>clicked(x)}/>
          ))}
          {/* <Marker
      onLoad={onLoad}
      position={position}
      onClick = {clicked}
    /> */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Maps);
