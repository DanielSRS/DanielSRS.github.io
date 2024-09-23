import { Navbar } from "./Navbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;