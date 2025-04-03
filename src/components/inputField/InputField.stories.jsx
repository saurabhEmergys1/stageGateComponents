import React from "react";
import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  arameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled", "standard"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
    },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    required: { control: "boolean" },
  },
};

// Template for stories
const Template = (args) => <InputField {...args} />;

// Default story
export const Default = {
  render: Template,
  args: {
    variant: "outlined",
    label: "Default Input",
    placeholder: "Enter text...",
  },
};
