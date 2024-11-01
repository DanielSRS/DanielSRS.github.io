import { Skills } from './Skills';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Skills',
  component: Skills,
} satisfies Meta<typeof Skills>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;
