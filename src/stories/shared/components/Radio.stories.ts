import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { PsiRadio } from '../../../app/shared/components/psi-radio/psi-radio';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { componentWrapperDecorator } from '@storybook/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const meta: Meta<PsiRadio> = {
  title: 'Components/Radio',
  component: PsiRadio,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserModule, ReactiveFormsModule, FormsModule)
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)
  ],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
    },
    size: {
      control: { type: 'radio' },
      options: ['medium', 'small'],
      description: 'Size of the radio button',
    },
    label: {
      control: 'text',
      description: 'Label text for the radio',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio (for grouping)',
    },
    value: {
      control: 'text',
      description: 'Value of the radio button',
    },
    checkedChange: {
      action: 'checkedChange',
      description: 'Event emitted when radio state changes',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<PsiRadio>;

// Base radio stories
export const EnabledMediumChecked: Story = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    label: 'Text',
    value: 'option1',
  },
};

export const EnabledMediumUnchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Text',
    value: 'option1',
  },
};

export const DisabledMediumChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'medium',
    label: 'Text',
    value: 'option1',
  },
};

export const DisabledMediumUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'medium',
    label: 'Text',
    value: 'option1',
  },
};

export const EnabledSmallChecked: Story = {
  args: {
    checked: true,
    disabled: false,
    size: 'small',
    label: 'Text',
    value: 'option1',
  },
};

export const EnabledSmallUnchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'small',
    label: 'Text',
    value: 'option1',
  },
};

export const DisabledSmallChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'small',
    label: 'Text',
    value: 'option1',
  },
};

export const DisabledSmallUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'small',
    label: 'Text',
    value: 'option1',
  },
};

export const Interactive: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Click to select',
    value: 'option1',
  },
}; 