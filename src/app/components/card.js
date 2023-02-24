import React from "react";
export default function Card ({stylesCard, title_card, children}) {  
    return(<> 
    <div className={`card bg-cards ${stylesCard} `}> 
        <div className="header-card">
            <h5 className="title-card">{title_card}</h5>  
        </div>
        <div className="body-card">  
        {children}
        </div>
    </div>
    </>); 
}; 