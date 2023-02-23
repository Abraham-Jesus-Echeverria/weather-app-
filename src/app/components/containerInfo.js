import React from "react"; 

const ContainerInfo = ({children, classNameContainerInfo}) => <div className={`row m-0 h-auto ${classNameContainerInfo}`}>{children}</div>

export default ContainerInfo; 