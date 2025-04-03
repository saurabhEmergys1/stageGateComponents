import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.value);
  return <Dropdown {...args} value={selected} onChange={setSelected} />;
};

export const Default = {
  render: Template,
  args: {
    label: "Select",
    isMulti: false,
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    isCheck: true,
  },
};
