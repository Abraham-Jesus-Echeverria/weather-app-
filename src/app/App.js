import React, { useState, useEffect, useRef }from "react";  
import Form from "./components/formulario"; 
import { key } from "../../keys";
import ClimaInfo from "./components/climaInfo"; 
import useFetch from "./hooks/fetch";  
import useGeolocation from "./hooks/GetGeolocation"; 
import Louder from "./components/louder";



export default function App () {    
    let initialStateDataWeater = {
      temperatura: 0, 
      humedad: 0, 
      presion: 0, 
      tempMax: 0, 
      tempMin: 0,
      imageCode: 0,
    }
    const {data, error, peticion,} = useFetch(initialStateDataWeater);  
    const {getCoordinates} = useGeolocation(); 
    const refLouder = useRef(); 



    const getDataLocation = async () =>{
      // esperamos la respuesta de la promesa para poder generar nuestra url y hacer la peticion 
      const getLocation = await getCoordinates(); 
      let Url_coordLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${getLocation.latitude}&lon=${getLocation.longitude}&lang=es&appid=${key.WEATHER_KEY}&units=metric`; 
      await peticion(Url_coordLocation);  
      refLouder.current.classList.add("d-none"); 
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
        <Louder refLouder={refLouder}/> 
        <ClimaInfo data={data} /> 
        {/* <p>{`longitud ${dataLocation.longitude || "Error"}`}</p> 
        <p>{`latitud ${dataLocation.latitude || "Error"}`}</p> */}
    </div> 
 
    </>)
}