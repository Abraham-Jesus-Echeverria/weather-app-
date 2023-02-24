import React from "react"

const Button = ({handleClick, className, children, reference}) => <button onClick={handleClick} className={className} ref={reference}>{children}</button> 

export default Button; 