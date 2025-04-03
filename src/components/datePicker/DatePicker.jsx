import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DatePicker = ({ label, value, onChange, required, disabled }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
          {label && <label htmlFor={label}>{label}</label>}
          {required && <span style={{ color: "red" }}>*</span>}
        </Box>
        <MuiDatePicker
          value={value || null}
          onChange={onChange}
          slotProps={{ textField: { size: "small" } }}
          disabled={disabled}
        />
      </Box>
    </LocalizationProvider>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

DatePicker.defaultProps = {
  label: "",
  value: null,
  required: false,
  disabled: false,
};

export default DatePicker;
