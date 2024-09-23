import { DoingCard } from "./DoingCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/AboutMe/DoingCard",
  component: DoingCard,
} satisfies Meta<typeof DoingCard>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;