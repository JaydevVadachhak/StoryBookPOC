import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PSIStatusBadge } from '../../../app/shared/components/psi-status-badge/psi-status-badge';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<PSIStatusBadge> = {
  title: 'Components/Status Badge',
  component: PSIStatusBadge,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserModule)],
    }),
    componentWrapperDecorator((story) => `<div style="display: flex; gap: 10px; justify-content: center;">${story}</div>`),
  ],
  argTypes: {
    statusText: {
      control: 'text',
      description: 'Text displayed inside the badge',
    },
    badgeSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge',
    },
    statusType: {
      control: { type: 'select' },
      options: [
        'secondary-high',
        'secondary-med',
        'secondary',
        'info',
        'info-med',
        'success',
        'success-med',
        'warning',
        'warning-med',
        'error',
        'error-med',
      ],
      description: 'Type/style of the status badge',
    },
  },
};

export default meta;
type Story = StoryObj<PSIStatusBadge>;

export const Default: Story = {
  args: {
    statusText: 'Success',
    badgeSize: 'small',
    statusType: 'secondary',
  },
};

export const BadgeWithSizes: Story = {
  args: {
    statusText: 'Active',
    badgeSize: 'small',
    statusType: 'success',
  },
};

export const Info: Story = {
  args: {
    statusText: 'Info',
    badgeSize: 'medium',
    statusType: 'info',
  },
};

export const InfoMed: Story = {
  args: {
    statusText: 'Info',
    badgeSize: 'medium',
    statusType: 'info-med',
  },
};

export const Success: Story = {
  args: {
    statusText: 'Success',
    badgeSize: 'medium',
    statusType: 'success',
  },
};

export const SuccessMed: Story = {
  args: {
    statusText: 'Success',
    badgeSize: 'medium',
    statusType: 'success-med',
  },
};

export const Warning: Story = {
  args: {
    statusText: 'Warning',
    badgeSize: 'medium',
    statusType: 'warning',
  },
};

export const WarningMed: Story = {
  args: {
    statusText: 'Warning',
    badgeSize: 'medium',
    statusType: 'warning-med',
  },
};

export const Error: Story = {
  args: {
    statusText: 'Error',
    badgeSize: 'medium',
    statusType: 'error',
  },
};

export const ErrorMed: Story = {
  args: {
    statusText: 'Error',
    badgeSize: 'medium',
    statusType: 'error-med',
  },
};

export const Secondary: Story = {
  args: {
    statusText: 'Secondary',
    badgeSize: 'medium',
    statusType: 'secondary',
  },
};

export const SecondaryMed: Story = {
  args: {
    statusText: 'Secondary Med',
    badgeSize: 'medium',
    statusType: 'secondary-med',
  },
};

export const SecondaryHigh: Story = {
  args: {
    statusText: 'Secondary High',
    badgeSize: 'medium',
    statusType: 'secondary-high',
  },
};
