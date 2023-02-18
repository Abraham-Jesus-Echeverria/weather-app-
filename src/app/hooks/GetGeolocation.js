import React, { useState } from "react"; 

export default function useGeolocation () {  
    const [stateErrorGeolocation, setStateErrorGeolocation] = useState(null); 
    const Geolocation = navigator.geolocation; 
    const getCoordinates = async () => {  
        // utilizamos una promesa ya que la api de geolocation nos devuelve los valores asincronamente.   
        return new Promise((resolve, reject) =>{  
            Geolocation.getCurrentPosition(GeolocationSuccess, GeolocationError); 
              function GeolocationSuccess  (geolocationPosition){ 
                    let coordinates = geolocationPosition.coords 
                    let coordsLatLong = { 
                        latitude: coordinates.latitude, 
                        longitude: coordinates.longitude, 
                    } 
                    resolve(coordsLatLong);   
                    setStateErrorGeolocation(false); 
                }
              function GeolocationError(err){  
                    reject(err); 
                    setStateErrorGeolocation(true); 
                    alert("lo sentimos no pudimos obtener tu ubicacion intentalo de nuevo o ingresa los datos de tu ubicacion con el siguiente formulario");   
                }; 
        }); 
    }; 
    return{ 
        getCoordinates, 
        stateErrorGeolocation
    }; 
}