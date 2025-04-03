import React from "react";
import CardGate from "./CardGate";
import test1 from "../../assets/test1.svg";

export default {
  title: "Components/CardGate",
  component: CardGate,
};

const Template = (args) => {
  return <CardGate {...args} />;
};

export const Default = {
  render: Template,
  args: {
    icon: test1,
    title: "Card Title",
    subTitle: "Card sub Title",
  },
};
