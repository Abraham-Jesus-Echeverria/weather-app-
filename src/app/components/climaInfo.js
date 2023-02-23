import React, {useEffect} from "react";
import ContainerInfo from "./containerInfo";
import cityImage from "../../assets/images/city.webp"

const backgroundStyleInfo = { 
  background: `url(${cityImage})`, 
  backgroundaSize: "cover",
}

export default function ClimaInfo ({data, isLoading}) {   
  let dataWeather = data.main;    
  
  const getDateToday = () => { 
    let date = new Date();  
    return date.toLocaleDateString(); 
  }
    return(
        <>  
        <div className="backgroundWeatherInfo row m-0">
          <div className="col-4 bg-danger p-4" style={backgroundStyleInfo}> 
            <div className=""> 
              <p className="m-0 h2 mb-2">{isLoading? "City" : data.name}</p> 
              <p className="m-0 h5">{getDateToday()}</p>  
            </div> 
            <div className="d-flex flex-column justify-content-end height">
              <ContainerInfo classNameContainerInfo={"h2 w-100"}>{`${isLoading? 0 : dataWeather.temp}°C`}</ContainerInfo> 
              <div className="d-flex">  
                <div className="containerImageTemp"> 
                  <img src={`http://openweathermap.org/img/wn/${isLoading? "": data.weather[0].icon}@4x.png`} alt="clima-image" className="w-100" />
                </div> 
                <p className="d-flex justify-content-center align-items-center text-capitalize m-0">{isLoading ? "description" : data.weather[0].description}</p>
              </div>
            </div> 
          </div>  
          <div className="col-7"> 
            <ContainerInfo>{`humedad: ${isLoading? 0 : dataWeather.humidity}`}</ContainerInfo>
            <ContainerInfo>{`presion: ${isLoading? 0 : dataWeather.pressure}`}</ContainerInfo>
            <ContainerInfo>{`temperatura maxima: ${isLoading? 0 : dataWeather.temp_max}`}</ContainerInfo>
            <ContainerInfo>{`temperatura minima: ${isLoading? 0 : dataWeather.temp_min}`}</ContainerInfo>
          </div>
         </div>
        </>
    ); 
}