import type { Meta, StoryObj } from '@storybook/react';
import NameInput from 'pages/RegisterPage/FormInputs/NameInput';

const NameInputMeta = {
  component: NameInput,
  title: '/FormInput/NameInput Component',
} satisfies Meta<typeof NameInput>;

export default NameInputMeta;

type Story = StoryObj<typeof NameInputMeta>;

export const Primary: Story = {
  args: {
    name: {
      name: '',
    },

    setName: () => {},
  },
};
