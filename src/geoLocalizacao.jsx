import React, { useState, useEffect } from "react";

function Geoloaction(){

  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  useEffect(() =>{
   
   const watchId =  navigator.geoloaction;

   const OB = watchId.watchPosition(handlePositionReceived);


   return () => navigator.geolocation.clearWatch(OB);

  

  }, []);

  function handlePositionReceived({coords}){

    const { latitude, longitude} = coords;
    setLocation({ latitude, longitude });

    
  }


  return(
    <>
    Latitude: {location.latitude} <br />
    Longitude: {location.longitude}
    </>

  );
}
export default Geoloaction;