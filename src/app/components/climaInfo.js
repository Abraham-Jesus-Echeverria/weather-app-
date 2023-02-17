import React from "react";

export default function ClimaInfo ({data}) {   
  console.log(data)
    return(
        <>  
        <div className="row col-12 bg-success m-0">{data.temperatura}</div>
        </>
    ); 
}