import React, { useState, useEffect} from "react";
export default function Card ({stylesCard, dataCard}) {  
    const [dTime, setDTime] = useState({}); 
    const generateDate = () => { 
        let dateTime = new Date(Date.parse(dataCard.dt_txt)); 
        setDTime({ 
            time: dateTime.toLocaleTimeString(),
            date: dateTime.toLocaleDateString()
        });
    }
    useEffect(()=>{
        generateDate();
    },[])
    return(<> 
    <div className={`card bg-cards ${stylesCard} text-center `}> 
        <div className="header-card">
            <h5 className="h6 my-1">{dTime.date}</h5>
            <p className="title-card h6 mb-1">{dTime.time}</p>  
        </div>
        <div className="body-card">  
        <img src={`http://openweathermap.org/img/wn/${dataCard.weather[0].icon}@2x.png`} alt="icon_weather"/>
        <p className="mb-0"> {`${dataCard.weather[0].description}`}</p>
        <p className="mb-0">{`${dataCard.main.temp}°C`} </p>
        </div>
    </div>
    </>); 
}; 