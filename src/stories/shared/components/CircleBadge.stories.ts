import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PsiCircleBadge } from '../../../app/shared/components/psi-circle-badge/psi-circle-badge';

const meta: Meta<PsiCircleBadge> = {
  title: 'Components/Circle Badge',
  component: PsiCircleBadge,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserModule)],
    }),
  ],
  argTypes: {
    statusText: {
      control: 'text',
      description: 'Text displayed next to the circle',
    },
    statusType: {
      control: { type: 'select' },
      options: ['secondary', 'success', 'warning', 'error', 'info'],
      description: 'Type/style of the circle badge',
    },
  },
};

export default meta;
type Story = StoryObj<PsiCircleBadge>;

export const Default: Story = {
  args: {
    statusText: 'Default',
    statusType: 'secondary',
  },
};

export const Secondary: Story = {
  args: {
    statusText: 'Secondary',
    statusType: 'secondary',
  },
};

export const Success: Story = {
  args: {
    statusText: 'Success',
    statusType: 'success',
  },
};

export const Warning: Story = {
  args: {
    statusText: 'Warning',
    statusType: 'warning',
  },
};

export const Error: Story = {
  args: {
    statusText: 'Error',
    statusType: 'error',
  },
};

export const Info: Story = {
  args: {
    statusText: 'Info',
    statusType: 'info',
  },
};
