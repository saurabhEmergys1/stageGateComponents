import { Box, Typography, Button, styled } from "@mui/material";

const ArrowSteps = ({ activeStep = 0 }) => {
  const steps = [
    "Gate 0",
    "Gate 1",
    "Gate 2",
    "Gate 3",
    "Gate 4",
    "Gate 5",
    "Gate 6",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "40px",
          verticalAlign: "middle",
        }}
      >
        {/* Steps Container */}
        <Box
          sx={{
            display: "flex",
            "& > :first-of-type .step": {
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              "&:before": {
                border: "none",
              },
            },
          }}
        >
          {steps.map((label, index) => (
            <Box
              key={label}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                margin: "0 3px",
                minWidth: 60,
                backgroundColor: index <= activeStep ? "#A6B22D" : "#ebedd8",
                padding: "10px 10px 10px 30px",
                transition: "background-color 0.2s ease",
                cursor: "default",
                userSelect: "none",
                "&:after, &:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  width: 0,
                  height: 0,
                  borderTop: "19px solid transparent",
                  borderBottom: "22px solid transparent",
                  transition: "border-color 0.2s ease",
                },
                "&:after": {
                  right: "-21.5px",
                  borderLeft: `22px solid ${
                    index <= activeStep ? "#A6B22D" : "#ebedd8"
                  }`,
                  zIndex: 2,
                },
                "&:before": {
                  left: 0,
                  borderLeft: "22px solid #fff",
                  zIndex: 0,
                },
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  color: index <= activeStep ? "white" : "black",
                  fontSize: 14,
                  "&:before": {
                    // content: '"✔"',
                    position: "absolute",
                    left: -20,
                    opacity: index <= activeStep ? 1 : 0,
                    transition: "opacity 0.3s ease 0.5s",
                  },
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ArrowSteps;
