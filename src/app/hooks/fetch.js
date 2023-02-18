import React, { useState } from "react";


export default function useFetch(initialState) {
  // variables de estado para guardar los datos y el mensaje de error
  const [data, setData] = useState(initialState);
  const [error, setError] = useState();
  // funcion que se ejecuta para realizar la peticion
  const peticion = async (url) => {
    try {
      // realizando la peticion get
      let response = await fetch(url);
      let res = await response.json(); 
      console.log(res); 

      // condicional para evaluar que la informacion llegue
      if (!response.ok) {
        let customeError = {
          status: response.status,
          statusText: response.statusText,
        };
        throw customeError;
      }

      // actualizando la variable de estado para guardar los datos
      setData({ 
        temperatura: res.main.temp, 
        humedad: res.main.humidity, 
        presion: res.main.pressure, 
        tempMax: res.main.temp_max, 
        tempMin: res.main.temp_min,
        imageCode: res.weather[0].icon
      });  
    } catch (err) {
      // acutalizando estado para crear un mensaje de error personalizado
      setError(`${err.status || "Error!"} ${err.statusText || "lo sentimos ha ocurrido un error" }`);
    }
  };
  // retornando objeto con el valor de los datos el error y la funcion que realiza la peticion
  return {
    data,
    error,
    peticion,
  };
}
