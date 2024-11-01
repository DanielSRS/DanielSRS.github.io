import { Projects } from './Projects';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Projects',
  component: Projects,
} satisfies Meta<typeof Projects>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;
