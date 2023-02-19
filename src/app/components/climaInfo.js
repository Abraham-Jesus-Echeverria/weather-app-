import React, {useEffect} from "react";

export default function ClimaInfo ({data, isLoading}) {  
  let dataWeather = data.main;    
    return(
        <>  
         <div className="row col-12 bg-success m-0">{`temperatura: ${isLoading? 0 : dataWeather.temp}`}</div>
         <div className="row col-12 bg-success m-0">{`humedad: ${isLoading? 0 : dataWeather.humidity}`}</div>
         <div className="row col-12 bg-success m-0">{`presion: ${isLoading? 0 : dataWeather.pressure}`}</div> 
         <div className="row col-12 bg-success m-0">{`temperatura maxima: ${isLoading? 0 : dataWeather.temp_max}`}</div>
         <div className="row col-12 bg-success m-0">{`temperatura minima: ${isLoading? 0 : dataWeather.temp_min}`}</div> 
         <img src={`http://openweathermap.org/img/wn/${isLoading? "": data.weather[0].icon}@4x.png`} alt="clima-image" />
        </>
    ); 
}