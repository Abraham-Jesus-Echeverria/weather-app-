import React, { useRef, useState } from "react"
import Button from "./button"
import styleSlider from "./slider.module.css" 

export default function Slider ({children}) { 
    const refbuttonsSlider1 = useRef();
    const refbuttonsSlider2 = useRef();
    const refContainerContent = useRef()
    let cont = 0; 
    let slide = 0;
    const containerTransform = refContainerContent.current;
    const handleMouseOver  = () => { 
        refbuttonsSlider1.current.classList.remove("d-none"); 
        refbuttonsSlider2.current.classList.remove("d-none"); 
    }

    const handleMouseOut = () => { 
        refbuttonsSlider1.current.classList.add("d-none"); 
        refbuttonsSlider2.current.classList.add("d-none");
    }  
 
    window.addEventListener("resize", ()=>{ 
      slide = 0; 
      cont = 0; 
      containerTransform.style.transform = `translateX(${slide}%)`; 
    }); 

    const functionSlider = (conditional, valueSlider, valueContElse) =>{ 
      conditional ? slide = valueSlider : cont = valueContElse 
    }
    const handleClickLeft = (e) => { 
      cont += 1;    
      window.innerWidth >= 768 ? functionSlider((cont <= 3), (slide - 34), 3) : functionSlider((cont <= 3), (slide -97.5), 3); 
      containerTransform.style.transform = `translateX(${slide}%)`
    }

    const handleClickRigth = () => { 
      cont -= 1; 
      window.innerWidth >= 768 ? functionSlider((cont >= 0), (slide + 34), 0) : functionSlider((cont >= 0),(slide + 97.5), 0); 
      containerTransform.style.transform = `translateX(${slide}%)`
    }

    return (<>  
    <div className="container-fluid px-1 rounded-2 overflow-hidden" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="row flex-nowrap position-relative"> 
          <Button handleClick={handleClickLeft} reference={refbuttonsSlider1} className={"w-auto btn position-absolute z-index height-slider ms-2 px-1 myleft text-white d-none"}><i className="fa-solid fa-arrow-left"></i></Button>
            <div ref={refContainerContent} className={`row flex-nowrap transition-left ${styleSlider.transition_left}`}> 
            {children} 
            </div>
          <Button handleClick={handleClickRigth} reference={refbuttonsSlider2} className={"w-auto btn position-absolute z-index height-slider ms-2 px-1 rigth0 myrigth text-white d-none"}><i className="fa-solid fa-arrow-right"></i></Button>
        </div>
      </div>
    </>)
}