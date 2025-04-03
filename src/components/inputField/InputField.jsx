import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  required,
  ...props
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
        {label && <label htmlFor={label}>{label}</label>}
        {required && <span style={{ color: "red" }}>*</span>}
      </Box>
      <TextField
        variant="outlined"
        size="small"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </Box>
  );
};

export default InputField;
