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

    // const evaluateContState = (cont, case1, case3, finalValue) =>{ 
    //   const containerSlider = refContainerContent.current 
    //   switch(cont){ 
    //     case case1: 
    //       containerSlider.style.transform = "translateX(0%)";
    //     break
    //     // case case2: 
    //     //   containerSlider.style.transform = "translateX(-67%)";
    //     // break 
    //     case case3: 
    //       containerSlider.style.transform = "translateX(-103%)";
    //       setContButtonSlider(finalValue);
    //     break
    //   }
      
    // }
    let cont = 0
    const handleClickLeft = (e) => {  
      cont -= 34;
      const containerSlider = refContainerContent.current; 
      containerSlider.style.transform = `translateX(${cont}%)`; 
      console.log(cont); 

    }
    const handleClickRigth = () => { 
      cont += 34; 
      const containerSlider = refContainerContent.current;
      containerSlider.style.transform = `translateX(${cont}%)`;
      console.log(cont)



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