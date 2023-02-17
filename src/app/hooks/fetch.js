import React, { useState } from "react";
import { keys } from ".././keys"

export default function useFetch() {
  // variables de estado para guardar los datos y el mensaje de error
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  // funcion que se ejecuta para realizar la peticion
  const peticion = async (city, contry) => {
    try {
      // realizando la peticion get
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${contry}&appid=${keys.WEATHER_KEY}&units=metric`);
      let res = await response.json();

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
        tempMin: res.main.temp_min
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
