import React, { useState } from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import "./accordion.scss";
import Expanded from "../icons/expanded";
import Fold from "../icons/Fold";

const MyAccordion = ({ icon, title, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <MuiAccordion
      sx={{ border: "1px solid #DEE2E6", boxShadow: "none" }}
      className="myAccordion"
      expanded={expanded}
      onChange={() => setExpanded((prev) => !prev)}
    >
      <AccordionSummary
        expandIcon={expanded ? <Fold /> : <Expanded />}
        sx={{
          backgroundColor: "#E9ECEF",
          height: "40px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {icon && (
          <Box
            component="img"
            sx={{
              height: 25,
              width: 30,
              mr: 1,
            }}
            alt="The house from the offer."
            src={icon}
          />
        )}
        <Typography component="span" sx={{ fontWeight: "700" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

export default MyAccordion;
