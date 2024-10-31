import { Contact } from './Contact';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Contact',
  component: Contact,
} satisfies Meta<typeof Contact>;

export const Basic = {} satisfies StoryObj<typeof meta>;

export default meta;
