import React, { useState } from "react";
import CheckboxGroup from "./CheckboxGroup"; // Adjust the import path

export default {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    options: { control: "array" },
  },
};

const Template = (args) => {
  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <CheckboxGroup
      {...args}
      value={selectedValues}
      onChange={setSelectedValues}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Select Fruits",
  name: "fruits",
  options: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ],
};
