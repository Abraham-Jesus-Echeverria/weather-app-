import React, {useEffect} from "react";
import ContainerInfo from "./containerInfo";
import cityImage from "../../assets/images/city.webp" 
import ClimaInfo5day from "./climaInfo5days";

const backgroundStyleInfo = { 
  background: `url(${cityImage})`, 
  backgroundaSize: "cover",
}

export default function ClimaInfo ({data, isLoading, dataNextDay, isLoadingNextDay}) {   
  let dataWeather = data.main;    
  
  const getDateToday = () => { 
    let date = new Date();  
    return date.toLocaleDateString(); 
  }
    return(
        <>  
        <div className="backgroundWeatherInfo row m-0 col-11 mx-auto mb-6">
          <section className="col-4 p-4 d-flex flex-column justify-content-between" style={backgroundStyleInfo}> 
            <div className=""> 
              <p className="m-0 h2 mb-2">{isLoading? "City" : data.name}</p> 
              <p className="m-0 h5">{getDateToday()}</p>  
            </div> 
            <div className="d-flex flex-column justify-content-end">
              <ContainerInfo classNameContainerInfo={"h2 w-100"}>{`${isLoading? 0 : dataWeather.temp}°C`}</ContainerInfo> 
              <div className="d-flex">  
                <div className="containerImageTemp"> 
                  <img src={`http://openweathermap.org/img/wn/${isLoading? "": data.weather[0].icon}@4x.png`} alt="clima-image" className="w-100" />
                </div> 
                <p className="d-flex justify-content-center align-items-center text-capitalize m-0">{isLoading ? "description" : data.weather[0].description}</p>
              </div>
            </div> 
          </section>  
          <div className="col-8 pb-3"> 
          <section>
            <div className="row"> 
              <ContainerInfo classNameContainerInfo={"col-6"}>
                <div className="bg-cards mt-3 py-3 mb-1 text-center rounded-3" > 
                  <p className="h4">Humidity</p>
                  <p className="h5">{`${isLoading? 0 : dataWeather.humidity}%`}</p> 
                </div>
              </ContainerInfo>
              <ContainerInfo classNameContainerInfo={"col-6"}>
                <div className="bg-cards mt-3 py-3 mb-1 text-center rounded-3" > 
                  <p className="h4">Pressure</p>
                  <p className="h5">{`${isLoading? 0 : dataWeather.pressure}mbar`}</p>
                </div>
              </ContainerInfo>
            </div>
            <div className="row mb-3"> 
              <ContainerInfo classNameContainerInfo={"col-6"}>
                <div className="bg-cards mt-3 py-3  text-center rounded-3">
                  <p className="h4">Maximum temperature</p>
                  <p className="h5">{`${isLoading? 0 : dataWeather.temp_max}°C`}</p>
                </div>
              </ContainerInfo>
              <ContainerInfo classNameContainerInfo={"col-6"}>
                <div className="bg-cards mt-3 py-3 text-center rounded-3">
                  <p className="h4">Minimum temperature</p>
                  <p className="h5">{`${isLoading? 0 : dataWeather.temp_min}°C`}</p>
                </div>
                </ContainerInfo>
            </div>
            </section>
            <div className="container-fluid border border-light border-1 mb-2"></div>
            {/* climaInfo 4 days  */}
            <section> 
               <ClimaInfo5day dataNextDay={dataNextDay} isLoadingNextDay={isLoadingNextDay}/>
            </section>
          </div>
         </div>
        </>
    ); 
}