import React, {useState, useEffect} from "react";
import Card from "./card";
import Button from "./button";
import Slider from "./slider";

export default function ClimaInfo5day ({dataNextDay, isLoadingNextDay}) { 

  const [dataFilter, setDataFilter] = useState([]); 
  const filterData = () => { 
    const ArrayDataFilter = []; 
    if(!isLoadingNextDay){ 
    for (let i = 0; i <= 7 ; i++) {
      ArrayDataFilter.push(dataNextDay.list[i]); 
    }
    setDataFilter(ArrayDataFilter);  
  }
  }
  useEffect(()=>{ 
  filterData(); 
  },[isLoadingNextDay]);


    return(<> 
      <h2 className="text-center h4">Forecast of the next day</h2> 
      <Slider> 
        { 
        isLoadingNextDay ?<p className="text-center">loading...</p> : dataFilter.map((data, index)=> <Card key={index} stylesCard={"col-md-3 col-6 bg-cards py-1 mx-1 m-0"} dataCard={data} />)
        }
      </Slider> 
    </>);  
}; 