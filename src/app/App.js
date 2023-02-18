import React, { useState, useEffect }from "react";  
import Form from "./components/formulario"; 
import { keys } from "./keys";
import ClimaInfo from "./components/climaInfo"; 
import useFetch from "./hooks/fetch";  
import useGeolocation from "./hooks/GetGeolocation"; 


export default function App () {    
    // llamando al custome hook para hacer la peticion a la API  
    const {data, error, peticion,} = useFetch();  
    const {getCoordinates, dataLocation} = useGeolocation(); 


    const getDataLocation = async () =>{
      // esperamos la respuesta de la promesa para poder generar nuestra url y hacer la peticion
      const getLocation = await getCoordinates(); 
      let Url_coordLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${getLocation.latitude}&lon=${getLocation.longitude}&appid=9969b40cd1f3432e9ff32f7cb0b6778a&units=metric`; 
      peticion(Url_coordLocation); 
    }
    
    useEffect(() =>{
      getDataLocation(); 
      // let Url_coordLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${dataLocation.latitude}&lon=${dataLocation.longitude}&appid=9969b40cd1f3432e9ff32f7cb0b6778a&units=metric`;   
      // console.log(Url_coordLocation); 
    }
    ,[]);

    // funcion para controlar el evenento submit
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const { cityName, contryName } = e.target; 
    //   let Url_form = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value},${contryName.value}&appid=${keys.WEATHER_KEY}&units=metric`;
    //   peticion(Url_form);   
    //   cityName.value = "" ; 
    //   contryName.value = "" ;  
    // }; 

    return(<>  
    <h2>Clima XD</h2>    
    <div className="container-fluid p-0 bg-danger">
        {/* <Form handleSubmit={handleSubmit} />    */}
        <ClimaInfo data={data} /> 
        {/* <p>{`longitud ${dataLocation.longitude || "Error"}`}</p> 
        <p>{`latitud ${dataLocation.latitude || "Error"}`}</p> */}
    </div> 
 
    </>)
}