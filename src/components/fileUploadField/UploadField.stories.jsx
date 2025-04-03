import React from "react";
import UploadField from "./UploadField";

export default {
  title: "Components/UploadField",
  component: UploadField,
  arameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    required: { control: "boolean" },
    accept: { control: "text" },
    multiple: { control: "boolean" },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
  },
};

// Template for stories
const Template = (args) => <UploadField {...args} />;

// Default story
export const Default = {
  render: Template,
  args: {
    label: "Upload File",
    placeholder: "Select a file",
    required: false,
    accept: "*/*",
    multiple: false,
  },
};
