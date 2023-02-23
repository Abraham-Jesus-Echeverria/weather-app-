import React, {useEffect} from "react";
import ContainerInfo from "./containerInfo";

export default function ClimaInfo ({data, isLoading}) {  
  console.log(data); 
  let dataWeather = data.main;    
    return(
        <>  
        <p>{data.name}</p> 
         <ContainerInfo>{`temperatura: ${isLoading? 0 : dataWeather.temp}`}</ContainerInfo> 
         <ContainerInfo>{`humedad: ${isLoading? 0 : dataWeather.humidity}`}</ContainerInfo>
         <ContainerInfo>{`presion: ${isLoading? 0 : dataWeather.pressure}`}</ContainerInfo>
         <ContainerInfo>{`temperatura maxima: ${isLoading? 0 : dataWeather.temp_max}`}</ContainerInfo>
         <ContainerInfo>{`temperatura minima: ${isLoading? 0 : dataWeather.temp_min}`}</ContainerInfo>
         <img src={`http://openweathermap.org/img/wn/${isLoading? "": data.weather[0].icon}@4x.png`} alt="clima-image" />
        </>
    ); 
}