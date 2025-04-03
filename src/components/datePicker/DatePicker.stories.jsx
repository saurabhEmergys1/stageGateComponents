import React, { useState } from "react";
import DatePicker from "./DatePicker";
import dayjs from "dayjs";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  argTypes: {
    label: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => {
  const [date, setDate] = useState(args.value || null);
  return <DatePicker {...args} value={date} onChange={setDate} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Pick a Date",
};

export const Required = Template.bind({});
Required.args = {
  label: "Pick a Date",
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  value: dayjs(),
  disabled: true,
};

export const PreselectedDate = Template.bind({});
PreselectedDate.args = {
  label: "Preselected Date",
  value: dayjs("2025-04-03"),
};
