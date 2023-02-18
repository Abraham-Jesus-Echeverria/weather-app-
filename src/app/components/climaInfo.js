import React from "react";

export default function ClimaInfo ({data}) {   
  // //  setData({ 
  //   temperatura: res.main.temp, 
  //   humedad: res.main.humidity, 
  //   presion: res.main.pressure, 
  //   tempMax: res.main.temp_max, 
  //   tempMin: res.main.temp_min,
  //   imageCode: res.weather[0].icon
  // });
    return(
        <>  
        <div className="row col-12 bg-success m-0">{`temperatura: ${data.temperatura}`}</div>
        <div className="row col-12 bg-success m-0">{`humedad: ${data.humedad}`}</div>
        <div className="row col-12 bg-success m-0">{`presion: ${data.presion}`}</div> 
        <div className="row col-12 bg-success m-0">{`temperatura maxima: ${data.tempMax}`}</div>
        <div className="row col-12 bg-success m-0">{`temperatura minima: ${data.tempMin}`}</div> 
        <img src={`http://openweathermap.org/img/wn/${data.imageCode}@4x.png`} alt="" />
        </>
    ); 
}