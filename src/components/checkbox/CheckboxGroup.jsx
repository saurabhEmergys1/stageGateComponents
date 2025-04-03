import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";

const CheckboxGroup = ({ label, value = [], onChange, name, options = [] }) => {
  const handleChange = (event) => {
    const { checked, value: selectedValue } = event.target;
    const newValue = checked
      ? [...value, selectedValue] // Add value if checked
      : value.filter((val) => val !== selectedValue); // Remove value if unchecked

    onChange(newValue);
  };

  return (
    <FormGroup>
      {label && <FormLabel id={`${name}-checkbox-group`}>{label}</FormLabel>}
      <Box
        aria-labelledby={`${name}-checkbox-group`}
        name={name}
        sx={{ display: "flex", flexDirection: "row", gap: 1 }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <MuiCheckbox
                value={option.value}
                checked={value.includes(option.value)}
                onChange={handleChange}
                sx={{
                  color: "#009FFD",
                  "&.Mui-checked": { color: "#009FFD" },
                }}
              />
            }
            label={option.label}
          />
        ))}
      </Box>
    </FormGroup>
  );
};

CheckboxGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CheckboxGroup;
