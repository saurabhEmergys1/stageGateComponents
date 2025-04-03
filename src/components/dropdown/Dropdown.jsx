import { memo } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { components } from "react-select";
import { Box } from "@mui/material";

const customStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderColor: isFocused ? "gray" : styles.borderColor,
    boxShadow: isFocused ? "none" : styles.boxShadow,
    ":hover": {
      borderColor: "green",
    },
    ".css-1dyz3mf": {
      flexWrap: "nowrap",
    },
    ".css-v7duua": {
      display: "none",
    },
    height: "40px",
    // width: "100%",
    minWidth: "20px",
    // maxWidth: "48rem",
    overflow: "hidden",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "grey",
    padding: "8px 4px",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: "gray",
  }),
  clearIndicator: (styles) => ({
    ...styles,
    fontSize: "14px",
    padding: "8px 4px",
  }),
  singleValue: (styles) => ({
    ...styles,
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    fontSize: "14px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    gap: "2px",
    backgroundColor: isSelected
      ? "#edfae8"
      : isFocused
      ? "#f0f0f0"
      : "transparent",
    color: "black",
    ":hover": {
      backgroundColor: "#e0e0e0",
    },
    overflow: "hidden",
  }),
  menu: (styles) => ({
    ...styles,
    gap: "10px",
    overflowY: "hidden",
    width: "100%",
  }),
  menuPortal: (styles) => ({
    ...styles,
    zIndex: 9999,
  }),
  container: (provided) => ({
    ...provided,
    width: "auto", // Instead of 100%
    minWidth: "222px",
  }),
};
const CheckboxOption = (props) => {
  return (
    <components.Option {...props}>
      <input
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null}
        style={{
          marginRight: "10px",
          accentColor: "green", // Change the checkbox color (for supported browsers)
          // If accentColor is not supported, you can use borderColor and backgroundColor as fallback:
          borderColor: props.isSelected ? "green" : "gray",
          backgroundColor: props.isSelected ? "green" : "white",
        }}
      />
      {props.label}
    </components.Option>
  );
};

CheckboxOption.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const Dropdown = ({
  label = "",
  value,
  setValue,
  options,
  loading,
  isMulti,
  isCheck,
  ...props
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "auto" }}>
      {label && (
        <Box component={"label"} htmlFor={label} sx={{ mb: 1 }}>
          {label}
        </Box>
      )}
      <Select
        value={value}
        placeholder="Select"
        onChange={setValue}
        options={options}
        isLoading={loading}
        components={isCheck ? { Option: CheckboxOption } : {}}
        menuPortalTarget={document.body}
        {...props}
        styles={customStyles}
        hideSelectedOptions={false}
        // sx={{
        //   width: "100%",
        //   flexWrap: "nowrap",
        // }}
        isMulti={isMulti}
        closeMenuOnSelect={false}
      />
    </Box>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  isMulti: PropTypes.bool,
  isCheck: PropTypes.bool,
  props: PropTypes.object,
};

export default memo(Dropdown);
