import React from "react"; 
import ReactDOM from "react-dom/client"; 
import App from "./App";  
import bootstrap from "bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"; 
import "../assets/images/weatherApp.webp"

const root = ReactDOM.createRoot(document.getElementById("App")); 
root.render(
    <App /> 
); 