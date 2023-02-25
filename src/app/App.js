import React, { useState, useEffect, useRef }from "react";  
import Form from "./components/formulario"; 
import { key } from "../../keys";
import "./App.css"; 
import ClimaInfo from "./components/climaInfo"; 
import useFetch from "./hooks/fetch";  
import useGeolocation from "./hooks/GetGeolocation"; 
import Louder from "./components/louder";  
import BackgroundImage from "../assets/images/lluvia.jpg"
import ClimaInfo5day from "./components/climaInfo5days";


let styleBackground = { 
  background: `url(${BackgroundImage})`,  
  backgroundSize: "100% 100%" 
}



export default function App () {    
    let initialStateDataWeater = {
      temperatura: 0, 
    } 
    const getDataWeatherToday = useFetch(initialStateDataWeater);
    const getDataWeatherTodayForm = useFetch(initialStateDataWeater); 
    const getDataWeatherlastHours = useFetch(initialStateDataWeater); 

    const {getCoordinates, stateErrorGeolocation} = useGeolocation(); 
    const refLouder = useRef(); 

    const getDataLocation = async () =>{
      // esperamos la respuesta de la promesa para poder generar nuestra url y hacer la peticion 
      try{ 
        const getLocation = await getCoordinates(); 
        let Url_coordLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${getLocation.latitude}&lon=${getLocation.longitude}&lang=en&appid=${key.WEATHER_KEY}&units=metric`; 
        await getDataWeatherToday.peticion(Url_coordLocation); 
        refLouder.current.classList.add("d-none");
        // se genera la url para obtener datos de los proximos 4 dias
        let URL_forecastlastHours= `https://api.openweathermap.org/data/2.5/forecast?lat=${getLocation.latitude}&lon=${getLocation.longitude}&lang=en&appid=${key.WEATHER_KEY}&units=metric`;  
        getDataWeatherlastHours.peticion(URL_forecastlastHours);   
      }catch (err){ 
        refLouder.current.classList.add("d-none"); 
      }
        
    }
    
    useEffect(() =>{
      getDataLocation(); 
    }
    ,[]);

    
    const handleSubmit = (e) => {
      e.preventDefault(); 
      const { cityName, contryName } = e.target;  
      // se genera url para obtener datos a traves del formulario.
      let Url_form = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value},${contryName.value}&appid=${key.WEATHER_KEY}&units=metric`;
      getDataWeatherTodayForm.peticion(Url_form);   
      cityName.value = "" ; 
      contryName.value = "" ;  
    }; 

    return(<>     
    <div className="container-fluid p-0 backgroundStyle d-flex flex-column align-items-center h-auto" style={styleBackground}> 
    <Louder refLouder={refLouder} classNameLouder={"louderStyles background-opacity position-absolute w-100 d-flex justify-content-center align-items-center"}/> 
      <div className="background-opacity col-12 text-white pb-5 vh-100"> 
        <h1 className={`text-center text-white mt-4 ${stateErrorGeolocation ? "mb-2" : "mb-4" }`}>Weather Forecast</h1>  
         { stateErrorGeolocation && <Form handleSubmit={handleSubmit} classNameForm={"col-12 mb-2"} />}    
          <div className="text-white"> 
             {/* si no le damos permisos de ubicacion entonces nos enviara los datos del formulario y no de la peticion que se ejecuta en el useEfeect */}
             <ClimaInfo data={stateErrorGeolocation? getDataWeatherTodayForm.data : getDataWeatherToday.data} isLoading={stateErrorGeolocation? getDataWeatherTodayForm.isLoading : getDataWeatherToday.isLoading} dataLastHours={getDataWeatherlastHours.data} isLoadingLastHour={getDataWeatherlastHours.isLoading} /> 
          </div>  
      </div>
    </div> 
 
    </>)
}