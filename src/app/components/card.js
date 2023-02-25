import React from "react";
export default function Card ({stylesCard, dataCard}) {  
    return(<> 
    <div className={`card bg-cards ${stylesCard} text-center `}> 
        <div className="header-card">
            <h5 className="title-card"> date </h5>  
        </div>
        <div className="body-card">  
        <img src={`http://openweathermap.org/img/wn/${dataCard.weather[0].icon}@2x.png`} alt="icon_weather"/>
        <p className="mb-1"> {`${dataCard.weather[0].description}`}</p>
        <p>{`${dataCard.main.temp}°C`} </p>
        </div>
    </div>
    </>); 
}; 