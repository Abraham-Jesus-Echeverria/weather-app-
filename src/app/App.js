import React, { useState, useEffect, useRef }from "react";  
import Form from "./components/formulario"; 
import { key } from "../../keys";
import "./App.css"; 
import ClimaInfo from "./components/climaInfo"; 
import useFetch from "./hooks/fetch";  
import useGeolocation from "./hooks/GetGeolocation"; 
import Louder from "./components/louder";  
import BackgroundImage from "../assets/images/lluvia.jpg"


let styleBackground = { 
  background: `url(${BackgroundImage})`
}



export default function App () {    
    let initialStateDataWeater = {
      temperatura: 0, 
    } 
    const getDataWeatherToday = useFetch(initialStateDataWeater);
    const getDataWeatherTodayForm = useFetch(initialStateDataWeater); 
    const getDataWeatherFor4days = useFetch(initialStateDataWeater); 

    const {getCoordinates, stateErrorGeolocation} = useGeolocation(); 
    const refLouder = useRef(); 

    const getDataLocation = async () =>{
      // esperamos la respuesta de la promesa para poder generar nuestra url y hacer la peticion 
      try{ 
        const getLocation = await getCoordinates(); 
        let Url_coordLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${getLocation.latitude}&lon=${getLocation.longitude}&lang=es&appid=${key.WEATHER_KEY}&units=metric`; 
        await getDataWeatherToday.peticion(Url_coordLocation); 
        refLouder.current.classList.add("d-none");
        // se genera la url para obtener datos de los proximos 4 dias
        let URL_forecastOf4Days = `https://api.openweathermap.org/data/2.5/forecast?lat=20.969981326249574&lon=-89.5719988399354&appid=9969b40cd1f3432e9ff32f7cb0b6778a`;  
        getDataWeatherFor4days.peticion(URL_forecastOf4Days);   
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
      // console.log("enviando..."); 
      const { cityName, contryName } = e.target;  
      // se genera url para obtener datos a traves del formulario.
      let Url_form = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value},${contryName.value}&appid=${key.WEATHER_KEY}&units=metric`;
      getDataWeatherTodayForm.peticion(Url_form);   
      cityName.value = "" ; 
      contryName.value = "" ;  
    }; 

    return(<>     
    <div className="container-fluid p-0 backgroundStyle d-flex flex-column align-items-center" style={styleBackground}> 
    <Louder refLouder={refLouder} classNameLouder={"louderStyles position-absolute w-100 d-flex justify-content-center align-items-center"}/> 
      <div className="bg-success col-9"> 
        <h2 className="text-center">Clima XD</h2> 
         { stateErrorGeolocation && <Form handleSubmit={handleSubmit} classNameForm={"col-11 mb-4"} />}    
          <div className="text-white"> 
             {/* si no le damos permisos de ubicacion entonces nos enviara los datos del formulario y no de la peticion que se ejecuta en el useEfeect */}
             <ClimaInfo data={stateErrorGeolocation? getDataWeatherTodayForm.data : getDataWeatherToday.data} isLoading={stateErrorGeolocation? getDataWeatherTodayForm.isLoading : getDataWeatherToday.isLoading} /> 
          </div> 
      </div>
    </div> 
 
    </>)
}