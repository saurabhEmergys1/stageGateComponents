import React, { useState } from "react";
import CustomRadioGroup from "./CustomRadioGroup"; // Adjust the path accordingly

export default {
  title: "Components/CustomRadioGroup",
  component: CustomRadioGroup,
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    options: { control: "object" },
  },
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value || "");

  return (
    <CustomRadioGroup
      {...args}
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Select Gender",
  name: "gender",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
};
