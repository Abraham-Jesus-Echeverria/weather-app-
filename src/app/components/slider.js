import React, { useRef, useState } from "react"
import Button from "./button"
import styleSlider from "./slider.module.css" 

console.log(styleSlider); 
export default function Slider ({children}) { 
    const refbuttonsSlider1 = useRef();
    const refbuttonsSlider2 = useRef();
    const refContainerContent = useRef()
    const [contButtonSlider, setContButtonSlider] = useState(1);
    const handleMouseOver  = () => { 
        refbuttonsSlider1.current.classList.remove("d-none"); 
        refbuttonsSlider2.current.classList.remove("d-none"); 
    }
    const handleMouseOut = () => { 
        refbuttonsSlider1.current.classList.add("d-none"); 
        refbuttonsSlider2.current.classList.add("d-none");
    }  

    const evaluateContState = () =>{ 
      
    }
    const handleClickLeft = () => { 
      setContButtonSlider(contButtonSlider + 1);
      const containerSlider = refContainerContent.current 
      switch(contButtonSlider){ 
        case 1: 
          containerSlider.classList.add(styleSlider.transition_left_active1);
        break
        case 2: 
          containerSlider.classList.add(styleSlider.transition_left_active2);
        break 
        case 3: 
          containerSlider.classList.add(styleSlider.transition_left_active3);
          setContButtonSlider(3);
        break
      }

    }
    const handleClickRigth = () => { 
        console.log("derecha"); 
    }

    return (<>  
    <div className="container-fluid height-slider px-1 rounded-2 overflow-hidden" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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