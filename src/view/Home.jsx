import { Box, Grid2, ListItem } from "@mui/material";
import React from "react";
import MyAccordion from "../components/accordion/MyAccordion";
import InputField from "../components/inputField/InputField";
import Button from "../components/button/Button";
import Dropdown from "../components/dropdown/Dropdown";
import icon from "../assets/icon.svg";
import AddIcon from "@mui/icons-material/Add";
import { Primary, Secondary } from "../components/button/Button.stories";
import CustomRadioGroup from "../components/radioGroup/CustomRadioGroup";
import UploadField from "../components/fileUploadField/UploadField";
import ArrowSteps from "../components/gateMenu/ArrowStep";
import CardGate from "../components/cardGate/CardGate";
import test1 from "../assets/test1.svg";
import DatePicker from "../components/datePicker/DatePicker";
import CheckboxGroup from "../components/checkbox/CheckboxGroup";

function Home() {
  const [radio, setRadio] = React.useState("");
  const [date, setDate] = React.useState("");
  const [checked, setChecked] = React.useState([]);
  const handleCheck = (e) => {
    setChecked(e);
  };
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
      <Box>
        <MyAccordion title="Enquiry Details" icon={icon}>
          <Grid2 container columnSpacing={30} rowSpacing={4}>
            <Grid2 size={4}>
              <InputField
                label="Name"
                placeholder="Enter your name"
                required={true}
                size="small"
              />
            </Grid2>
            <Grid2 size={4}>
              <Dropdown label="Select values" placeholder="Enter your name" />
            </Grid2>
            <Grid2 size={4}>
              <CheckboxGroup
                label={"Select values"}
                value={checked}
                onChange={handleCheck}
                name={"checkbbox"}
                options={options}
              />
            </Grid2>
          </Grid2>
        </MyAccordion>
      </Box>
      <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
        <Button label="Submit" {...Primary.args} />
        <Button icon={<AddIcon size="small" />} {...Primary.args} />
        <Button label="Close" {...Secondary.args} />
      </Box>
      <Box>
        <CustomRadioGroup
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ]}
        />
      </Box>
      <Box>Radio Button value: {radio}</Box>
      <Box sx={{ mt: 2 }}>
        <UploadField label={"upload file"} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <ArrowSteps activeStep={2} />
      </Box>
      <Box>
        <CardGate
          icon={test1}
          title={"Marketing Note"}
          subTitle={"Role: KAM"}
        />
      </Box>
      <Box>
        <DatePicker
          label={"Select date"}
          value={date}
          onChange={setDate}
          required={true}
          disabled={false}
        />
        Date Picker value: {date ? date.format("DD-MM-YYYY") : ""}
      </Box>
      <Box>Checked values: {checked.join(", ")}</Box>
    </Box>
  );
}

export default Home;
