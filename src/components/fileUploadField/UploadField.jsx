import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Button from "../button/Button";
import { Secondary } from "../button/Button.stories";
import InputField from "../inputField/InputField";

const UploadField = ({
  label,
  btnLabel,
  required,
  accept,
  multiple,
  onChange,
  disabled,
}) => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      if (multiple) {
        setFileName(`${files.length} files selected`);
      } else {
        setFileName(files[0].name);
      }
    } else {
      setFileName("");
    }
    onChange(files);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box className="file-upload-field">
      {label && (
        <label className="file-upload-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}

      <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          style={{ display: "none" }}
        />

        <InputField value={fileName || "..."} />

        <Button
          {...Secondary.args}
          size={"large"}
          label={btnLabel || "Browse"}
          onClick={handleBrowseClick}
          disabled={disabled}
        >
          Browse
        </Button>
      </Box>
    </Box>
  );
};

UploadField.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

UploadField.defaultProps = {
  label: "",
  required: false,
  accept: "*/*",
  multiple: false,
  disabled: false,
};

export default UploadField;
