import React, { useState } from "react"; 

export default function useGeolocation () {   

    const [dataLocation, setDataLocation] = useState(null);  
    const getCoordinates = async () => { 
        // utilizamos una promesa ya que la api de geolocation nos devuelve los valores asincronamente.   
        return new Promise((resolve, reject) =>{ 
            navigator.geolocation.getCurrentPosition(
                (geolocationPosition)=>{ 
                    let coordinates = geolocationPosition.coords 
                    let coordsLatLong = { 
                        latitude: coordinates.latitude, 
                        longitude: coordinates.longitude, 
                    }
                    resolve(coordsLatLong); 
                }), 

                ( err )=>{ 
                    reject(alert("lo sentimos ocurrio un error"));
                }; 
        }); 
            
 
    }; 

    return{ 
        getCoordinates, 
        dataLocation,
    }; 
}