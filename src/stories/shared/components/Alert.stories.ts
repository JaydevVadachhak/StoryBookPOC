import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { PsiAlert } from '../../../app/shared/components/psi-alert/psi-alert';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

const meta: Meta<PsiAlert> = {
  title: 'Components/Alert',
  component: PsiAlert,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserModule)],
    }),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the alert',
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'Type of the alert',
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position of the alert',
    },
    timeout: {
      control: 'number',
      defaultValue: 5000,
      description: 'Timeout of the alert in milliseconds',
    },
  },
};

export default meta;
type Story = StoryObj<PsiAlert>;

export const Default: Story = {
  args: {
    title: 'Success Message',
    type: 'success',
    position: 'bottom-right',
  },
};

export const Error: Story = {
  args: {
    title: 'Error Message',
    type: 'error',
    position: 'bottom-right',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning Message',
    type: 'warning',
    position: 'top-right',
  },
};

export const Info: Story = {
  args: {
    title: 'Info Message',
    type: 'info',
    position: 'top-right',
  },
};
