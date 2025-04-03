import { fn } from "@storybook/test";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    // label: "Primary Button",
    style: {
      backgroundColor: "#009FFD",
      color: "white",
      boxShadow: "none",
      textTransform: "none",
    },
    variant: "contained",
  },
};

export const Secondary = {
  args: {
    // label: "Secondary Button",
    style: {
      backgroundColor: "#CDECFE",
      color: "#009FFD",
      boxShadow: "none",
      textTransform: "none",
    },
    variant: "contained",
  },
};
