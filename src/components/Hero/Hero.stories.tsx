import { Hero } from './Hero';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Hero',
  component: Hero,
} satisfies Meta<typeof Hero>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;
