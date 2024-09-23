import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;