import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { PsiBanner } from '../../../app/shared/components/psi-banner/psi-banner';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<PsiBanner> = {
  title: 'Components/Banner',
  component: PsiBanner,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserModule)],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)
  ],
  argTypes: {
    subject: {
      control: 'text',
      description: 'Subject/title of the banner',
    },
    message: {
      control: 'text',
      description: 'Message content of the banner',
    },
    linkText: {
      control: 'text',
      description: 'Text for the link (empty to hide)',
    },
    linkUrl: {
      control: 'text',
      description: 'URL for the link',
    },
    buttonText: {
      control: 'text',
      description: 'Text for the action button',
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error', 'info'],
      description: 'Type/style of the banner',
    },
    showButton: {
      control: 'boolean',
      description: 'Whether to show the action button',
    },
  },
};

export default meta;
type Story = StoryObj<PsiBanner>;

export const Success: Story = {
  args: {
    subject: 'Subject',
    message: 'Message',
    linkText: 'Link',
    linkUrl: '#',
    buttonText: 'Button',
    type: 'success',
    showButton: true,
  }
};

export const Warning: Story = {
  args: {
    subject: 'Warning',
    message: 'This is a warning message with important information.',
    linkText: 'Learn more',
    linkUrl: '#',
    buttonText: 'Acknowledge',
    type: 'warning',
    showButton: true,
  }
};

export const Error: Story = {
  args: {
    subject: 'Error',
    message: 'An error occurred while processing your request.',
    linkText: 'Try again',
    linkUrl: '#',
    buttonText: 'Report',
    type: 'error',
    showButton: true,
  }
};

export const Info: Story = {
  args: {
    subject: 'Information',
    message: 'This feature will be available soon.',
    linkText: 'Learn more',
    linkUrl: '#',
    buttonText: 'Got it',
    type: 'info',
    showButton: true,
  }
};

export const NoButton: Story = {
  args: {
    subject: 'No Button',
    message: 'This banner has no action button.',
    linkText: 'Link',
    linkUrl: '#',
    type: 'success',
    showButton: false,
  }
};

export const NoLink: Story = {
  args: {
    subject: 'No Link',
    message: 'This banner has no link in the message.',
    linkText: '',
    buttonText: 'Button',
    type: 'info',
    showButton: true,
  }
}; 