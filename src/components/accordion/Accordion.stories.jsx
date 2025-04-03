import React from "react";
import MyAccordion from "./MyAccordion";
import { Button } from "@mui/material";

export default {
  title: "Components/MyAccordion",
  component: MyAccordion,
  arameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text", required: true },
    icon: { control: "text" },
  },
};

const Template = (args) => <MyAccordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Accordion 1",
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
