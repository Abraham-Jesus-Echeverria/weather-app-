import React from "react"

export default function Louder ({refLouder, classNameLouder}) { 
return(<> 
    <div ref={refLouder} className={classNameLouder}> 
        <div className="w-100 text-white h-auto p-5 rounded text-center">
          <p className="h2 mb-3">Loading</p>
          <div>  
          <i className="fa-solid fa-spinner h1 animationLouder"></i>
          </div>
        </div>
    </div>
</>)
}