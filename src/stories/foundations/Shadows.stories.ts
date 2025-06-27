import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ShadowGroup {
  name: string;
  shadows: {
    name: string;
    className: string;
    cssVar?: string;
    value: string;
    backgroundColor?: string;
  }[];
}

@Component({
  selector: 'shadow-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="font-family: Arial, sans-serif; padding: 24px;">
      <h1 style="margin-bottom: 32px;">Shadow System</h1>
      
      <div *ngFor="let group of shadowGroups" style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 24px; padding-bottom: 8px; border-bottom: 1px solid #eee;">{{ group.name }}</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 40px;">
          <div *ngFor="let shadow of group.shadows">
            <!-- Shadow display container with ample space around it to show shadow -->
            <div style="padding: 40px; margin-bottom: 24px; background-color: #f0f0f0; border-radius: 8px;">
              <!-- Shadow display box with increased size for better visibility -->
              <div 
                [class]="shadow.className"
                [style.background-color]="shadow.backgroundColor || '#ffffff'"
                style="height: 140px; width: 100%; display: flex; align-items: center; justify-content: center; border-radius: 6px; position: relative; transition: all 0.3s ease;"
              >
                <span style="color: #666; font-size: 14px;">{{ shadow.name }}</span>
              </div>
            </div>
            
            <!-- Shadow information -->
            <div style="margin-top: 16px; background: #fafafa; border-radius: 6px; padding: 16px;">
              <div style="margin-bottom: 8px;">
                <span style="font-weight: bold;">Class:</span> 
                <code style="background-color: #eee; padding: 4px 6px; border-radius: 3px; font-size: 14px;">.{{ shadow.className }}</code>
              </div>
              
              <div *ngIf="shadow.cssVar" style="margin-bottom: 8px;">
                <span style="font-weight: bold;">SCSS Variable:</span>
                <code style="background-color: #eee; padding: 4px 6px; border-radius: 3px; font-size: 14px;">{{ shadow.cssVar }}</code>
              </div>
              
              <div>
                <span style="font-weight: bold;">Value:</span>
                <code style="background-color: #eee; padding: 4px 6px; border-radius: 3px; font-size: 14px; word-break: break-all;">{{ shadow.value }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>
      /* Add these styles to make shadows more visible */
      .shadow-primary-100, .shadow-primary-75, .shadow-primary-50, .shadow-primary-25,
      .shadow-black-100, .shadow-black-75, .shadow-black-50, .shadow-black-25,
      .shadow-secondary-100, .shadow-secondary-75, .shadow-secondary-50, .shadow-secondary-25,
      .shadow-light-100, .shadow-dark-100, .shadow-modal-100, .shadow-modal-25 {
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      
      .shadow-primary-100:hover, .shadow-primary-75:hover, .shadow-primary-50:hover, .shadow-primary-25:hover,
      .shadow-black-100:hover, .shadow-black-75:hover, .shadow-black-50:hover, .shadow-black-25:hover,
      .shadow-secondary-100:hover, .shadow-secondary-75:hover, .shadow-secondary-50:hover, .shadow-secondary-25:hover,
      .shadow-light-100:hover, .shadow-dark-100:hover, .shadow-modal-100:hover {
        transform: translateY(-5px);
      }
      
      /* Add specific styles for the special case of inset shadow */
      .shadow-modal-25:hover {
        transform: scale(0.98);
      }
    </style>
  `,
})
export class ShadowShowcaseComponent {
  @Input()
  shadowGroups: ShadowGroup[] = [
    {
      name: 'Primary Shadows',
      shadows: [
        {
          name: 'Primary 100',
          className: 'shadow-primary-100',
          cssVar: '$shadow-primary-100',
          value: '0px 16px 40px 0px rgba(231, 69, 54, 0.15)',
        },
        {
          name: 'Primary 75',
          className: 'shadow-primary-75',
          cssVar: '$shadow-primary-75',
          value: '0px 12px 24px 0px rgba(231, 69, 54, 0.15)',
        },
        {
          name: 'Primary 50',
          className: 'shadow-primary-50',
          cssVar: '$shadow-primary-50',
          value: '0px 8px 16px 0px rgba(231, 69, 54, 0.15)',
        },
        {
          name: 'Primary 25',
          className: 'shadow-primary-25',
          cssVar: '$shadow-primary-25',
          value: '0px 4px 8px 0px rgba(231, 69, 54, 0.15)',
        }
      ]
    },
    {
      name: 'Black Shadows',
      shadows: [
        {
          name: 'Black 100',
          className: 'shadow-black-100',
          cssVar: '$shadow-black-100',
          value: '0px 16px 40px 0px rgba(74, 74, 74, 0.15)',
        },
        {
          name: 'Black 75',
          className: 'shadow-black-75',
          cssVar: '$shadow-black-75',
          value: '0px 12px 24px 0px rgba(74, 74, 74, 0.15)',
        },
        {
          name: 'Black 50',
          className: 'shadow-black-50',
          cssVar: '$shadow-black-50',
          value: '0px 8px 16px 0px rgba(74, 74, 74, 0.15)',
        },
        {
          name: 'Black 25',
          className: 'shadow-black-25',
          cssVar: '$shadow-black-25',
          value: '0px 4px 8px 0px rgba(74, 74, 74, 0.15)',
        },
        {
          name: 'Black 0',
          className: 'no-shadow',
          cssVar: '$shadow-black-0',
          value: '0 2px 8px 0 rgba(7, 18, 37, 0)',
        }
      ]
    },
    {
      name: 'Secondary Shadows',
      shadows: [
        {
          name: 'Secondary 100',
          className: 'shadow-secondary-100',
          cssVar: '$shadow-secondary-100',
          value: '0 16px 40px 0 rgba(119, 194, 245, 0.15)',
        },
        {
          name: 'Secondary 75',
          className: 'shadow-secondary-75',
          cssVar: '$shadow-secondary-75',
          value: '0 12px 24px 0 rgba(119, 194, 245, 0.15)',
        },
        {
          name: 'Secondary 50',
          className: 'shadow-secondary-50',
          cssVar: '$shadow-secondary-50',
          value: '0 8px 16px 0 rgba(119, 194, 245, 0.15)',
        },
        {
          name: 'Secondary 25',
          className: 'shadow-secondary-25',
          cssVar: '$shadow-secondary-25',
          value: '0 4px 8px 0 rgba(119, 194, 245, 0.15)',
        }
      ]
    },
    {
      name: 'Special Shadows',
      shadows: [
        {
          name: 'Light 100',
          className: 'shadow-light-100',
          value: '0px 4px 8px 0px rgba(203, 203, 203, 0.15)',
        },
        {
          name: 'Dark 100',
          className: 'shadow-dark-100',
          value: '0px 4px 8px 0px rgba(74, 74, 74, 0.15)',
        },
        {
          name: 'Modal 100',
          className: 'shadow-modal-100',
          value: '0px 8px 16px 0px rgba(74, 74, 74, 0.15)',
        },
        {
          name: 'Modal 25 (Inset)',
          className: 'shadow-modal-25',
          value: '0px 1px 3px 0px rgba(223, 227, 232, 1) inset',
          backgroundColor: '#f5f5f5',
        }
      ]
    }
  ];
}

const meta: Meta<ShadowShowcaseComponent> = {
  title: 'Foundations/Shadows',
  component: ShadowShowcaseComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8f8f8' },
        { name: 'dark', value: '#333333' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<ShadowShowcaseComponent>;

export const AllShadows: Story = {
  args: {},
};

export const PrimaryShadows: Story = {
  args: {
    shadowGroups: [
      {
        name: 'Primary Shadows',
        shadows: [
          {
            name: 'Primary 100',
            className: 'shadow-primary-100',
            cssVar: '$shadow-primary-100',
            value: '0px 16px 40px 0px rgba(231, 69, 54, 0.15)',
          },
          {
            name: 'Primary 75',
            className: 'shadow-primary-75',
            cssVar: '$shadow-primary-75',
            value: '0px 12px 24px 0px rgba(231, 69, 54, 0.15)',
          },
          {
            name: 'Primary 50',
            className: 'shadow-primary-50',
            cssVar: '$shadow-primary-50',
            value: '0px 8px 16px 0px rgba(231, 69, 54, 0.15)',
          },
          {
            name: 'Primary 25',
            className: 'shadow-primary-25',
            cssVar: '$shadow-primary-25',
            value: '0px 4px 8px 0px rgba(231, 69, 54, 0.15)',
          }
        ]
      }
    ]
  }
};

export const BlackShadows: Story = {
  args: {
    shadowGroups: [
      {
        name: 'Black Shadows',
        shadows: [
          {
            name: 'Black 100',
            className: 'shadow-black-100',
            cssVar: '$shadow-black-100',
            value: '0px 16px 40px 0px rgba(74, 74, 74, 0.15)',
          },
          {
            name: 'Black 75',
            className: 'shadow-black-75',
            cssVar: '$shadow-black-75',
            value: '0px 12px 24px 0px rgba(74, 74, 74, 0.15)',
          },
          {
            name: 'Black 50',
            className: 'shadow-black-50',
            cssVar: '$shadow-black-50',
            value: '0px 8px 16px 0px rgba(74, 74, 74, 0.15)',
          },
          {
            name: 'Black 25',
            className: 'shadow-black-25',
            cssVar: '$shadow-black-25',
            value: '0px 4px 8px 0px rgba(74, 74, 74, 0.15)',
          }
        ]
      }
    ]
  }
};

export const SpecialShadows: Story = {
  args: {
    shadowGroups: [
      {
        name: 'Special Shadows',
        shadows: [
          {
            name: 'Modal 100',
            className: 'shadow-modal-100',
            value: '0px 8px 16px 0px rgba(74, 74, 74, 0.15)',
          },
          {
            name: 'Modal 25 (Inset)',
            className: 'shadow-modal-25',
            value: '0px 1px 3px 0px rgba(223, 227, 232, 1) inset',
            backgroundColor: '#f5f5f5',
          }
        ]
      }
    ]
  }
};
