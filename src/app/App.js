import React from "react";  
import Form from "./components/formulario"; 
import ClimaInfo from "./components/climaInfo";

export default function App () { 
    return(<>  
    <h2>Clima XD</h2>    
    <div className="container-fluid p-0 bg-danger">
        <Form />   
        <ClimaInfo />
    </div> 
 
    </>)
}