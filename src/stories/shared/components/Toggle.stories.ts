import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { PsiToggle } from '../../../app/shared/components/psi-toggle/psi-toggle';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { componentWrapperDecorator } from '@storybook/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Since we're getting linter errors about these imports, let's comment them out
// We'll avoid using the play functions in the stories for now
// import { expect } from '@storybook/jest';
// import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<PsiToggle> = {
  title: 'Components/Toggle',
  component: PsiToggle,
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
      description: 'Whether the toggle is checked/on',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    size: {
      control: { type: 'radio' },
      options: ['medium', 'small'],
      description: 'Size of the toggle',
    },
    label: {
      control: 'text',
      description: 'Label text for the toggle',
    },
    avatarSrc: {
      control: 'text',
      description: 'URL for avatar image displayed in the toggle when on (optional)',
    },
    checkedChange: {
      action: 'checkedChange',
      description: 'Event emitted when toggle state changes',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<PsiToggle>;

// Base toggle stories
export const EnabledMediumOn: Story = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    label: 'Text',
  },
};

export const EnabledMediumOff: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Text',
  },
};

export const DisabledMediumOn: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'medium',
    label: 'Text',
  },
};

export const DisabledMediumOff: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'medium',
    label: 'Text',
  },
};

export const EnabledSmallOn: Story = {
  args: {
    checked: true,
    disabled: false,
    size: 'small',
    label: 'Text',
  },
};

export const EnabledSmallOff: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'small',
    label: 'Text',
  },
};

export const DisabledSmallOn: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'small',
    label: 'Text',
  },
};

export const DisabledSmallOff: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'small',
    label: 'Text',
  },
};

export const WithAvatar: Story = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    label: 'Text',
    avatarSrc: 'https://i.pravatar.cc/300',
  },
};

export const Interactive: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Click to toggle',
  },
}; 