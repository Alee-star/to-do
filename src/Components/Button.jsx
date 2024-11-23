import React from "react";

const Button = ({
  label,
  backgroundColor,
  onClick,
  isDisabled = false,
  isActive = false,
  className,
}) => {
  const buttonStyle = isDisabled
    ? { backgroundColor: "#ccc", cursor: "not-allowed" } // Disabled style
    : { backgroundColor: isActive ? "rgb(10, 177, 173)" : backgroundColor }; // Active style or default background

  return (
    <button
      className={className}
      onClick={onClick}
      style={buttonStyle}
      disabled={isDisabled} 
    >
      {label}
    </button>
  );
};

export default Button;

