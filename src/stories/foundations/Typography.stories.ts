import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TypographyGroup {
  name: string;
  styles: {
    className: string;
    sampleText: string;
    description: string;
    fontFamily: string;
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: string;
    textTransform?: string;
  }[];
}

@Component({
  selector: 'typography-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="font-family: Arial, sans-serif; padding: 16px;">
      <h1 style="margin-bottom: 24px;">Typography System</h1>
      
      <div *ngFor="let group of typographyGroups" style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #eee;">{{ group.name }}</h2>
        
        <div *ngFor="let style of group.styles" 
             style="margin-bottom: 32px; display: flex; flex-direction: column; background-color: #fff; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
          
          <div style="padding: 24px; border-bottom: 1px solid #eee;">
            <div [class]="style.className">{{ style.sampleText }}</div>
          </div>
          
          <div style="padding: 16px; background-color: #fafafa;">
            <div style="margin-bottom: 8px;">
              <span style="font-weight: bold;">Class:</span> 
              <code style="background-color: #f0f0f0; padding: 2px 4px; border-radius: 3px; font-size: 14px;">{{ style.className }}</code>
            </div>
            
            <div style="margin-bottom: 8px; font-size: 14px; color: #555;">{{ style.description }}</div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; margin-top: 12px; font-size: 13px;">
              <div><span style="font-weight: bold;">Font Family:</span> {{ style.fontFamily }}</div>
              <div *ngIf="style.fontSize"><span style="font-weight: bold;">Font Size:</span> {{ style.fontSize }}</div>
              <div *ngIf="style.lineHeight"><span style="font-weight: bold;">Line Height:</span> {{ style.lineHeight }}</div>
              <div *ngIf="style.fontWeight"><span style="font-weight: bold;">Weight:</span> {{ style.fontWeight }}</div>
              <div *ngIf="style.textTransform"><span style="font-weight: bold;">Transform:</span> {{ style.textTransform }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TypographyShowcaseComponent {
  @Input()
  typographyGroups: TypographyGroup[] = [
    {
      name: 'Crimson Pro Headings',
      styles: [
        {
          className: 'typo-cri-h1-black-bold',
          sampleText: 'Heading 1 Bold',
          description: 'Main page heading, hero sections',
          fontFamily: 'Crimson Pro',
          fontSize: '56px',
          lineHeight: '72px',
          fontWeight: '700',
        },
        {
          className: 'typo-cri-h1-black-regular',
          sampleText: 'Heading 1 Regular',
          description: 'Alternative main heading style',
          fontFamily: 'Crimson Pro',
          fontSize: '56px',
          lineHeight: '72px',
          fontWeight: '400',
        },
        {
          className: 'typo-cri-h2-black-bold',
          sampleText: 'Heading 2 Bold',
          description: 'Section headings',
          fontFamily: 'Crimson Pro',
          fontSize: '40px',
          lineHeight: '56px',
          fontWeight: '700',
        },
        {
          className: 'typo-cri-h3-black-bold',
          sampleText: 'Heading 3 Bold',
          description: 'Subsection headings',
          fontFamily: 'Crimson Pro',
          fontSize: '32px',
          lineHeight: '44px',
          fontWeight: '700',
        },
        {
          className: 'typo-cri-h4-black-bold',
          sampleText: 'Heading 4 Bold',
          description: 'Card headings, smaller section titles',
          fontFamily: 'Crimson Pro',
          fontSize: '24px',
          lineHeight: '36px',
          fontWeight: '700',
        },
        {
          className: 'typo-cri-h5-black-medium',
          sampleText: 'Heading 5 Medium',
          description: 'Small section titles, emphasized text',
          fontFamily: 'Crimson Pro',
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '500',
        },
        {
          className: 'typo-cri-h6-black-medium',
          sampleText: 'Heading 6 Medium',
          description: 'Small headings, subheadings',
          fontFamily: 'Crimson Pro',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '500',
        }
      ]
    },
    {
      name: 'Crimson Pro Styles',
      styles: [
        {
          className: 'typo-cri-paragraph-black-regular',
          sampleText: 'This is a paragraph text in Crimson Pro with regular weight.',
          description: 'Paragraph text in serif font',
          fontFamily: 'Crimson Pro',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '400',
        },
        {
          className: 'typo-cri-paragraph-black-medium',
          sampleText: 'This is a paragraph text in Crimson Pro with medium weight.',
          description: 'Emphasized paragraph text',
          fontFamily: 'Crimson Pro',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '500',
        },
        {
          className: 'typo-cri-paragraph-black-bold',
          sampleText: 'This is a paragraph text in Crimson Pro with bold weight.',
          description: 'Strongly emphasized paragraph text',
          fontFamily: 'Crimson Pro',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '700',
        },
        {
          className: 'typo-cri-paragraph-caps-black-bold',
          sampleText: 'This is uppercase text',
          description: 'Uppercase paragraph text, often used for emphasis',
          fontFamily: 'Crimson Pro',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '700',
          textTransform: 'uppercase',
        },
        {
          className: 'typo-cri-paragraph-white-regular',
          sampleText: 'This is white text (visible on dark background)',
          description: 'Light text for dark backgrounds',
          fontFamily: 'Crimson Pro',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '400',
        }
      ]
    },
    {
      name: 'Montserrat Body Text',
      styles: [
        {
          className: 'typo-mon-body-black-regular',
          sampleText: 'This is body text in Montserrat with regular weight. It is used for most of the content on the website.',
          description: 'Main body text style',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '400',
        },
        {
          className: 'typo-mon-body-black-medium',
          sampleText: 'This is body text in Montserrat with medium weight used for emphasizing parts of content.',
          description: 'Emphasized body text',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '500',
        },
        {
          className: 'typo-mon-body-black-bold',
          sampleText: 'This is body text in Montserrat with bold weight for strong emphasis.',
          description: 'Strongly emphasized body text',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '700',
        },
        {
          className: 'typo-mon-link-black-medium',
          sampleText: 'This is a link style in Montserrat',
          description: 'Text links within content',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '500',
        }
      ]
    },
    {
      name: 'Montserrat Small Text',
      styles: [
        {
          className: 'typo-mon-paragraph-black-regular',
          sampleText: 'This is paragraph text in Montserrat. Used for smaller content blocks and descriptions.',
          description: 'Standard paragraph text',
          fontFamily: 'Montserrat',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '400',
        },
        {
          className: 'typo-mon-paragraph-black-medium',
          sampleText: 'This is medium weight paragraph text for moderate emphasis.',
          description: 'Emphasized paragraph text',
          fontFamily: 'Montserrat',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '500',
        },
        {
          className: 'typo-mon-caption-black-regular',
          sampleText: 'This is caption text used for image captions, footnotes, etc.',
          description: 'Caption and supporting text',
          fontFamily: 'Montserrat',
          fontSize: '10px',
          lineHeight: '14px',
          fontWeight: '400',
        },
        {
          className: 'typo-mon-caption-black-bold',
          sampleText: 'This is bold caption text for emphasis in small text contexts.',
          description: 'Emphasized caption text',
          fontFamily: 'Montserrat',
          fontSize: '10px',
          lineHeight: '14px',
          fontWeight: '700',
        },
        {
          className: 'typo-mon-small-black-regular',
          sampleText: 'Smallest text size used for legal text, disclaimers, etc.',
          description: 'Very small supporting text',
          fontFamily: 'Montserrat',
          fontSize: '8px',
          lineHeight: '12px',
          fontWeight: '400',
        },
        {
          className: 'typo-mon-small-caps-black-bold',
          sampleText: 'SMALL UPPERCASE TEXT',
          description: 'Small uppercase text for emphasis',
          fontFamily: 'Montserrat',
          fontSize: '8px',
          lineHeight: '12px',
          fontWeight: '700',
          textTransform: 'uppercase',
        }
      ]
    }
  ];
}

const meta: Meta<TypographyShowcaseComponent> = {
  title: 'Foundations/Typography',
  component: TypographyShowcaseComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)
  ],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TypographyShowcaseComponent>;

export const AllTypography: Story = {
  args: {},
};

export const CrimsonHeadings: Story = {
  args: {
    typographyGroups: [
      {
        name: 'Crimson Pro Headings',
        styles: [
          {
            className: 'typo-cri-h1-black-bold',
            sampleText: 'Heading 1 Bold',
            description: 'Main page heading, hero sections',
            fontFamily: 'Crimson Pro',
            fontSize: '56px',
            lineHeight: '72px',
            fontWeight: '700',
          },
          {
            className: 'typo-cri-h2-black-bold',
            sampleText: 'Heading 2 Bold',
            description: 'Section headings',
            fontFamily: 'Crimson Pro',
            fontSize: '40px',
            lineHeight: '56px',
            fontWeight: '700',
          },
          {
            className: 'typo-cri-h3-black-bold',
            sampleText: 'Heading 3 Bold',
            description: 'Subsection headings',
            fontFamily: 'Crimson Pro',
            fontSize: '32px',
            lineHeight: '44px',
            fontWeight: '700',
          },
          {
            className: 'typo-cri-h4-black-bold',
            sampleText: 'Heading 4 Bold',
            description: 'Card headings, smaller section titles',
            fontFamily: 'Crimson Pro',
            fontSize: '24px',
            lineHeight: '36px',
            fontWeight: '700',
          },
          {
            className: 'typo-cri-h5-black-medium',
            sampleText: 'Heading 5 Medium',
            description: 'Small section titles, emphasized text',
            fontFamily: 'Crimson Pro',
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '500',
          },
          {
            className: 'typo-cri-h6-black-medium',
            sampleText: 'Heading 6 Medium',
            description: 'Small headings, subheadings',
            fontFamily: 'Crimson Pro',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '500',
          }
        ]
      }
    ]
  }
};

export const MontserratBodyText: Story = {
  args: {
    typographyGroups: [
      {
        name: 'Montserrat Body Text',
        styles: [
          {
            className: 'typo-mon-body-black-regular',
            sampleText: 'This is body text in Montserrat with regular weight. It is used for most of the content on the website.',
            description: 'Main body text style',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
          },
          {
            className: 'typo-mon-body-black-medium',
            sampleText: 'This is body text in Montserrat with medium weight used for emphasizing parts of content.',
            description: 'Emphasized body text',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
          },
          {
            className: 'typo-mon-body-black-bold',
            sampleText: 'This is body text in Montserrat with bold weight for strong emphasis.',
            description: 'Strongly emphasized body text',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '700',
          },
          {
            className: 'typo-mon-paragraph-black-regular',
            sampleText: 'This is paragraph text in Montserrat. Used for smaller content blocks and descriptions.',
            description: 'Standard paragraph text',
            fontFamily: 'Montserrat',
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '400',
          }
        ]
      }
    ]
  }
};

export const SmallText: Story = {
  args: {
    typographyGroups: [
      {
        name: 'Small Text Styles',
        styles: [
          {
            className: 'typo-mon-caption-black-regular',
            sampleText: 'This is caption text used for image captions, footnotes, etc.',
            description: 'Caption and supporting text',
            fontFamily: 'Montserrat',
            fontSize: '10px',
            lineHeight: '14px',
            fontWeight: '400',
          },
          {
            className: 'typo-mon-small-black-regular',
            sampleText: 'Smallest text size used for legal text, disclaimers, etc.',
            description: 'Very small supporting text',
            fontFamily: 'Montserrat',
            fontSize: '8px',
            lineHeight: '12px',
            fontWeight: '400',
          }
        ]
      }
    ]
  }
};
