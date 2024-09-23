import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";

const meta = {
  title: "Pages/App",
  component: App,
} satisfies Meta<typeof App>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;