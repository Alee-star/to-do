import React from "react";

const Button = ({
  label,
  backgroundColor,
  onClick,
  isDisabled = false,
  isActive = false,
  className,
}) => {
  // Check if the button is disabled first
  const buttonStyle = isDisabled
    ? { backgroundColor: "#ccc", cursor: "not-allowed" } // Disabled style
    : { backgroundColor: isActive ? "rgb(10, 177, 173)" : backgroundColor }; // Active style or default background

  return (
    <button
      className={className}
      onClick={onClick}
      style={buttonStyle}
      disabled={isDisabled} // Disable the button when isDisabled is true
    >
      {label}
    </button>
  );
};

export default Button;
