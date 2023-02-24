import React from "react";
import Card from "./card";
import Button from "./button";
import Slider from "./slider";
export default function ClimaInfo5day ({data5days}) { 
  console.log(data5days);  
    return(<> 
      <h2 className="text-center h4">Forecast last hours</h2> 
      <Slider> 
      <Card title_card={"title"} stylesCard={"col-3 bg-cards height-slider mx-1"}>
        body
       </Card>
       <Card title_card={"title"} stylesCard={"col-3 bg-cards height-slider mx-1"}>
        body
       </Card>
       <Card title_card={"title"} stylesCard={"col-3 bg-cards height-slider mx-1"}>
        body
       </Card>
       <Card title_card={"title"} stylesCard={"col-3 bg-cards height-slider mx-1"}>
        body
       </Card>
       <Card title_card={"title"} stylesCard={"col-3 bg-cards height-slider mx-1"}>
        body
       </Card>
       <Card title_card={"title"} stylesCard={"col-3 bg-cards height-slider mx-1"}>
        body
       </Card>
       <Card title_card={"title"} stylesCard={"col-3 bg-cards height-slider mx-1"}>
        body
       </Card>
       <Card title_card={"title"} stylesCard={"col-3 bg-cards height-slider mx-1"}>
        body
       </Card> 
      </Slider> 
    </>); 
}; 