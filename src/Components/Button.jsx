import React from "react"

const Button = ({label, backgroundColor, onClick, isDisabled = false, isActive = false}) => {
    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: isActive ? "rgb(10, 177, 173)" : backgroundColor}} 
            disabled={isDisabled}
        >
        {label}
        </button>
    )
}

export default Button
