import { AboutMe } from "./AboutMe";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/AboutMe",
  component: AboutMe,
} satisfies Meta<typeof AboutMe>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;