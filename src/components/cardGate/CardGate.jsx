import { Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function CardGate({ icon, title, subTitle }) {
  return (
    <Box
      sx={{
        height: "124px",
        width: "177px",
        border: "2px solid #A6B22D",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#C5D43533",
      }}
    >
      {icon && (
        <Box
          component="img"
          style={{ display: "flex" }}
          src={icon}
          alt={icon}
        />
      )}
      <Box sx={{ textAlign: "center", marginTop: "8px" }}>
        <Typography variant="h6" sx={{ fontSize: "14px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#67696B", fontSize: "12px" }}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}

CardGate.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default CardGate;
