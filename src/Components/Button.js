import React from "react"

const Button = ({label, backgroundColor, onClick, isDisabled}) => {
    return (
        <button onClick={onClick} style={{ backgroundColor}} disabled={isDisabled}>{label}</button>
    )
}
export default Button