import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const CustomRadioGroup = ({ label, name, value, onChange, options = [] }) => {
  return (
    <FormControl>
      <FormLabel id={`${name}-radio-group`}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={`${name}-radio-group`}
        name={name}
        value={value}
        onChange={onChange}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                sx={{
                  color: "#009FFD",
                  "&.Mui-checked": { color: "#009FFD" },
                }}
              />
            }
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
