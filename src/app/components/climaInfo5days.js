import React, {useState, useEffect} from "react";
import Card from "./card";
import Button from "./button";
import Slider from "./slider";

export default function ClimaInfo5day ({dataLastHours, isLoadingLastHour}) { 
  // console.log(dataLastHours);  
  // console.log(isLoadingLastHour);

  const [dataFilter, setDataFilter] = useState([]); 
  const filterData = () => { 
    const ArrayDataFilter = []; 
    if(!isLoadingLastHour){ 
    for (let i = 0; i <= 7 ; i++) {
      ArrayDataFilter.push(dataLastHours.list[i]); 
    }
    setDataFilter(ArrayDataFilter);  
  }
  }
  useEffect(()=>{ 
  filterData(); 
  console.log(dataLastHours); 
  },[isLoadingLastHour]);


    return(<> 
      <h2 className="text-center h4">Forecast last hours</h2> 
      <Slider> 
        { 
        isLoadingLastHour ?<p className="text-center">loading...</p> : dataFilter.map((data, index)=> <Card key={index} stylesCard={"col-md-3 bg-cards height-slider mx-1"} dataCard={data} />)
        }
      </Slider> 
    </>);  
}; 