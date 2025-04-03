import { memo } from "react";
import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

// The Button component
const Button = ({
  label,
  onClick,
  variant,
  size,
  disabled,
  className,
  style,
  disabledColor,
  icon,
  iconStyle,
  ...props
}) => {
  let buttonStyle = { ...style };

  if (disabled && disabledColor) {
    buttonStyle = { ...buttonStyle, backgroundColor: disabledColor };
  } else {
    buttonStyle = { ...buttonStyle };
  }

  return (
    <MuiButton
      className={className}
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      style={buttonStyle}
      {...props}
    >
      {icon && <span style={{ display: "flex", iconStyle }}>{icon}</span>}
      {label && <label htmlFor={label}>{label}</label>}
    </MuiButton>
  );
};

// Prop types to ensure the correct types of props are passed
Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]), // MUI sizes
  disabled: PropTypes.bool,
  style: PropTypes.object,
  disabledColor: PropTypes.string,
  icon: PropTypes.string,
  iconStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
};

export default memo(Button);
