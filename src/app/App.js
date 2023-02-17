import React, { useState }from "react";  
import Form from "./components/formulario"; 
import ClimaInfo from "./components/climaInfo"; 
import useFetch from "./hooks/fetch";  


export default function App () {      
    const {data, error, peticion,} = useFetch();  

    const handleSubmit = (e) => {
      e.preventDefault();
      const { cityName, contryName } = e.target;
      peticion(cityName.value, contryName.value);   
      cityName.value = "" ; 
      contryName.value = "" ;  
    }; 

    return(<>  
    <h2>Clima XD</h2>    
    <div className="container-fluid p-0 bg-danger">
        <Form handleSubmit={handleSubmit} />   
        <ClimaInfo data={data} />
    </div> 
 
    </>)
}