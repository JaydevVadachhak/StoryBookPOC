import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ColorGroup {
  name: string;
  colors: {
    name: string;
    value: string;
    cssVar?: string;
  }[];
}

@Component({
  selector: 'color-palette',
  imports: [CommonModule],
  template: `
    <div style="font-family: Arial, sans-serif;">
      <h1 style="margin-bottom: 24px;">Color Palette</h1>
      
      <div *ngFor="let group of colorGroups" style="margin-bottom: 32px;">
        <h2 style="margin-bottom: 16px;">{{ group.name }}</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px;">
          <div 
            *ngFor="let color of group.colors" 
            style="display: flex; flex-direction: column; border-radius: 6px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
          >
            <div 
              [style.background-color]="color.value"
              style="height: 80px; width: 100%;"
            ></div>
            <div style="padding: 12px; background-color: white;">
              <div style="font-weight: bold; margin-bottom: 4px;">{{ color.name }}</div>
              <div style="font-size: 12px; color: #666;">{{ color.value }}</div>
              <div *ngIf="color.cssVar" style="font-size: 12px; color: #666; font-family: monospace; margin-top: 4px;">{{ color.cssVar }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ColorPaletteComponent {
  @Input()
  colorGroups: ColorGroup[] = [
    {
      name: 'Primary',
      colors: [
        { name: 'Primary', value: 'rgba(231, 69, 54, 1)', cssVar: '$color-primary' },
        { name: 'Primary 10%', value: 'rgba(231, 69, 54, 0.1)', cssVar: '$color-primary-10' },
        { name: 'Primary 25%', value: 'rgba(231, 69, 54, 0.25)', cssVar: '$color-primary-25' },
        { name: 'Primary 50%', value: 'rgba(231, 69, 54, 0.5)', cssVar: '$color-primary-50' },
        { name: 'Primary 75%', value: 'rgba(231, 69, 54, 0.75)', cssVar: '$color-primary-75' },
        { name: 'Primary Very High', value: 'rgba(222, 19, 0, 1)', cssVar: '$color-primary-v-high' },
        { name: 'Primary Medium', value: 'rgba(237, 42, 24, 1)', cssVar: '$color-primary-v-medium' },
        { name: 'Primary Low', value: 'rgba(250, 103, 89, 1)', cssVar: '$color-primary-v-low' },
        { name: 'Primary Low 10%', value: 'rgba(250, 103, 89, 0.1)', cssVar: '$color-primary-v-low-10' },
      ],
    },
    {
      name: 'Secondary',
      colors: [
        { name: 'Secondary', value: 'rgba(54, 216, 231, 1)', cssVar: '$color-secondary' },
        { name: 'Secondary 10%', value: 'rgba(54, 216, 231, 0.1)', cssVar: '$color-secondary-10' },
        { name: 'Secondary 25%', value: 'rgba(54, 216, 231, 0.25)', cssVar: '$color-secondary-25' },
        { name: 'Secondary 50%', value: 'rgba(54, 216, 231, 0.5)', cssVar: '$color-secondary-50' },
        { name: 'Secondary 75%', value: 'rgba(54, 216, 231, 0.75)', cssVar: '$color-secondary-75' },
        { name: 'Secondary Very High', value: 'rgba(46, 128, 135, 1)', cssVar: '$color-secondary-v-high' },
        { name: 'Secondary Medium', value: 'rgba(46, 179, 191, 1)', cssVar: '$color-secondary-v-medium' },
        { name: 'Secondary Low', value: 'rgba(35, 236, 255, 1)', cssVar: '$color-secondary-v-low' },
        { name: 'Secondary Low 10%', value: 'rgba(35, 236, 255, 0.1)', cssVar: '$color-secondary-v-low-10' },
      ],
    },
    {
      name: 'Success',
      colors: [
        { name: 'Success', value: 'rgba(110, 216, 35, 1)', cssVar: '$color-success' },
        { name: 'Success 10%', value: 'rgba(110, 216, 35, 0.1)', cssVar: '$color-success-10' },
        { name: 'Success 25%', value: 'rgba(110, 216, 35, 0.25)', cssVar: '$color-success-25' },
        { name: 'Success 50%', value: 'rgba(110, 216, 35, 0.5)', cssVar: '$color-success-50' },
        { name: 'Success 75%', value: 'rgba(110, 216, 35, 0.75)', cssVar: '$color-success-75' },
        { name: 'Success Very High', value: 'rgba(68, 128, 26, 1)', cssVar: '$color-success-v-high' },
        { name: 'Success Medium', value: 'rgba(84, 178, 18, 1)', cssVar: '$color-success-v-medium' },
        { name: 'Success Low', value: 'rgba(102, 245, 0, 1)', cssVar: '$color-success-v-low' },
        { name: 'Success Low 10%', value: 'rgba(102, 245, 0, 0.1)', cssVar: '$color-success-v-low-10' },
      ],
    },
    {
      name: 'Warning',
      colors: [
        { name: 'Warning', value: 'rgba(255, 162, 29, 1)', cssVar: '$color-warning' },
        { name: 'Warning 10%', value: 'rgba(255, 162, 29, 0.1)', cssVar: '$color-warning-10' },
        { name: 'Warning 25%', value: 'rgba(255, 162, 29, 0.25)', cssVar: '$color-warning-25' },
        { name: 'Warning 50%', value: 'rgba(255, 162, 29, 0.5)', cssVar: '$color-warning-50' },
        { name: 'Warning 75%', value: 'rgba(255, 162, 29, 0.75)', cssVar: '$color-warning-75' },
        { name: 'Warning Very High', value: 'rgba(140, 94, 28, 1)', cssVar: '$color-warning-v-high' },
        { name: 'Warning Medium', value: 'rgba(191, 120, 19, 1)', cssVar: '$color-warning-v-medium' },
        { name: 'Warning Low', value: 'rgba(255, 150, 0, 1)', cssVar: '$color-warning-v-low' },
        { name: 'Warning Low 10%', value: 'rgba(255, 150, 0, 0.1)', cssVar: '$color-warning-v-low-10' },
      ],
    },
    {
      name: 'Error',
      colors: [
        { name: 'Error', value: 'rgba(197, 0, 0, 1)', cssVar: '$color-error' },
        { name: 'Error 10%', value: 'rgba(197, 0, 0, 0.1)', cssVar: '$color-error-10' },
        { name: 'Error 25%', value: 'rgba(197, 0, 0, 0.25)', cssVar: '$color-error-25' },
        { name: 'Error 50%', value: 'rgba(197, 0, 0, 0.5)', cssVar: '$color-error-50' },
        { name: 'Error 75%', value: 'rgba(197, 0, 0, 0.75)', cssVar: '$color-error-75' },
        { name: 'Error Very High', value: 'rgba(139, 0, 0, 1)', cssVar: '$color-error-v-high' },
        { name: 'Error Medium', value: 'rgba(229, 0, 0, 1)', cssVar: '$color-error-v-medium' },
        { name: 'Error Low', value: 'rgba(255, 23, 23, 1)', cssVar: '$color-error-v-low' },
        { name: 'Error Low 10%', value: 'rgba(255, 23, 23, 0.1)', cssVar: '$color-error-v-low-10' },
      ],
    },
    {
      name: 'Neutral Black',
      colors: [
        { name: 'Neutral Black', value: 'rgba(35, 35, 35, 1)', cssVar: '$color-neutral-black' },
        { name: 'Neutral Black 10%', value: 'rgba(35, 35, 35, 0.1)', cssVar: '$color-neutral-black-10' },
        { name: 'Neutral Black 25%', value: 'rgba(35, 35, 35, 0.25)', cssVar: '$color-neutral-black-25' },
        { name: 'Neutral Black 50%', value: 'rgba(35, 35, 35, 0.5)', cssVar: '$color-neutral-black-50' },
        { name: 'Neutral Black 75%', value: 'rgba(35, 35, 35, 0.75)', cssVar: '$color-neutral-black-75' },
        { name: 'Neutral Black Very High', value: 'rgba(0, 0, 0, 1)', cssVar: '$color-neutral-black-v-high' },
        { name: 'Neutral Black Medium', value: 'rgba(42, 42, 42, 1)', cssVar: '$color-neutral-black-v-medium' },
        { name: 'Neutral Black Low', value: 'rgba(89, 89, 89, 1)', cssVar: '$color-neutral-black-v-low' },
        { name: 'Neutral Black Low 10%', value: 'rgba(89, 89, 89, 0.1)', cssVar: '$color-neutral-black-v-low-10' },
      ],
    },
    {
      name: 'Neutral Dark',
      colors: [
        { name: 'Neutral Dark', value: 'rgba(74, 74, 74, 1)', cssVar: '$color-neutral-dark' },
        { name: 'Neutral Dark 10%', value: 'rgba(74, 74, 74, 0.1)', cssVar: '$color-neutral-dark-10' },
        { name: 'Neutral Dark 25%', value: 'rgba(74, 74, 74, 0.25)', cssVar: '$color-neutral-dark-25' },
        { name: 'Neutral Dark 50%', value: 'rgba(74, 74, 74, 0.5)', cssVar: '$color-neutral-dark-50' },
        { name: 'Neutral Dark 75%', value: 'rgba(74, 74, 74, 0.75)', cssVar: '$color-neutral-dark-75' },
        { name: 'Neutral Dark Very High', value: 'rgba(53, 53, 53, 1)', cssVar: '$color-neutral-dark-v-high' },
        { name: 'Neutral Dark Medium', value: 'rgba(120, 120, 120, 1)', cssVar: '$color-neutral-dark-v-medium' },
        { name: 'Neutral Dark Low', value: 'rgba(234, 234, 234, 1)', cssVar: '$color-neutral-dark-v-low' },
        { name: 'Neutral Dark Low 10%', value: 'rgba(234, 234, 234, 0.1)', cssVar: '$color-neutral-dark-v-low-10' },
      ],
    },
    {
      name: 'Neutral Light',
      colors: [
        { name: 'Neutral Light', value: 'rgb(203, 203, 203)', cssVar: '$color-neutral-light' },
        { name: 'Neutral Light 10%', value: 'rgba(203, 203, 203, 0.1)', cssVar: '$color-neutral-light-10' },
        { name: 'Neutral Light 25%', value: 'rgba(203, 203, 203, 0.25)', cssVar: '$color-neutral-light-25' },
        { name: 'Neutral Light 50%', value: 'rgba(203, 203, 203, 0.5)', cssVar: '$color-neutral-light-50' },
        { name: 'Neutral Light 75%', value: 'rgba(203, 203, 203, 0.75)', cssVar: '$color-neutral-light-75' },
        { name: 'Neutral Light Very High', value: 'rgba(152, 152, 152, 1)', cssVar: '$color-neutral-light-v-high' },
        { name: 'Neutral Light Medium', value: 'rgba(189, 189, 189, 1)', cssVar: '$color-neutral-light-v-medium' },
        { name: 'Neutral Light Low', value: 'rgba(241, 241, 241, 1)', cssVar: '$color-neutral-light-v-low' },
        { name: 'Neutral Light Low 10%', value: 'rgba(241, 241, 241, 0.1)', cssVar: '$color-neutral-light-v-low-10' },
      ],
    },
    {
      name: 'Neutral Beige',
      colors: [
        { name: 'Neutral Beige', value: 'rgba(249, 247, 247, 1)', cssVar: '$color-neutral-beige' },
        { name: 'Neutral Beige 10%', value: 'rgba(249, 247, 247, 0.1)', cssVar: '$color-neutral-beige-10' },
        { name: 'Neutral Beige 25%', value: 'rgba(249, 247, 247, 0.25)', cssVar: '$color-neutral-beige-25' },
        { name: 'Neutral Beige 50%', value: 'rgba(249, 247, 247, 0.5)', cssVar: '$color-neutral-beige-50' },
        { name: 'Neutral Beige 75%', value: 'rgba(249, 247, 247, 0.75)', cssVar: '$color-neutral-beige-75' },
      ],
    },
    {
      name: 'Neutral White',
      colors: [
        { name: 'Neutral White', value: 'rgb(255, 255, 255)', cssVar: '$color-neutral-white' },
        { name: 'Neutral White 10%', value: 'rgba(255, 255, 255, 0.1)', cssVar: '$color-neutral-white-10' },
        { name: 'Neutral White 25%', value: 'rgba(255, 255, 255, 0.25)', cssVar: '$color-neutral-white-25' },
        { name: 'Neutral White 50%', value: 'rgba(255, 255, 255, 0.5)', cssVar: '$color-neutral-white-50' },
        { name: 'Neutral White 75%', value: 'rgba(255, 255, 255, 0.75)', cssVar: '$color-neutral-white-75' },
      ],
    },
    {
      name: 'Accent Gold',
      colors: [
        { name: 'Accent Gold', value: 'rgba(203, 187, 160, 1)', cssVar: '$color-accent-gold' },
        { name: 'Accent Gold 10%', value: 'rgba(203, 187, 160, 0.1)', cssVar: '$color-accent-gold-10' },
        { name: 'Accent Gold 25%', value: 'rgba(203, 187, 160, 0.25)', cssVar: '$color-accent-gold-25' },
        { name: 'Accent Gold 50%', value: 'rgba(203, 187, 160, 0.5)', cssVar: '$color-accent-gold-50' },
        { name: 'Accent Gold 75%', value: 'rgba(203, 187, 160, 0.75)', cssVar: '$color-accent-gold-75' },
        { name: 'Accent Gold Very High', value: 'rgba(255, 255, 255, 1)', cssVar: '$color-accent-gold-v-high' },
        { name: 'Accent Gold Medium', value: 'rgba(221, 187, 130, 1)', cssVar: '$color-accent-gold-v-medium' },
        { name: 'Accent Gold Low', value: 'rgba(234, 214, 181, 1)', cssVar: '$color-accent-gold-v-low' },
        { name: 'Accent Gold Low 10%', value: 'rgba(234, 214, 181, 0.1)', cssVar: '$color-accent-gold-v-low-10' },
      ],
    },
  ];
}

const meta: Meta<ColorPaletteComponent> = {
  title: 'Foundations/Colors',
  component: ColorPaletteComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ColorPaletteComponent>;

export const AllColors: Story = {
  args: {},
};

export const PrimaryColors: Story = {
  args: {
    colorGroups: [
      {
        name: 'Primary',
        colors: [
          { name: 'Primary', value: 'rgba(231, 69, 54, 1)', cssVar: '$color-primary' },
          { name: 'Primary 10%', value: 'rgba(231, 69, 54, 0.1)', cssVar: '$color-primary-10' },
          { name: 'Primary 25%', value: 'rgba(231, 69, 54, 0.25)', cssVar: '$color-primary-25' },
          { name: 'Primary 50%', value: 'rgba(231, 69, 54, 0.5)', cssVar: '$color-primary-50' },
          { name: 'Primary 75%', value: 'rgba(231, 69, 54, 0.75)', cssVar: '$color-primary-75' },
          { name: 'Primary Very High', value: 'rgba(222, 19, 0, 1)', cssVar: '$color-primary-v-high' },
          { name: 'Primary Medium', value: 'rgba(237, 42, 24, 1)', cssVar: '$color-primary-v-medium' },
          { name: 'Primary Low', value: 'rgba(250, 103, 89, 1)', cssVar: '$color-primary-v-low' },
          { name: 'Primary Low 10%', value: 'rgba(250, 103, 89, 0.1)', cssVar: '$color-primary-v-low-10' },
        ],
      },
    ],
  },
};

export const NeutralColors: Story = {
  args: {
    colorGroups: [
      {
        name: 'Neutral Colors',
        colors: [
          { name: 'Neutral Black', value: 'rgba(35, 35, 35, 1)', cssVar: '$color-neutral-black' },
          { name: 'Neutral Dark', value: 'rgba(74, 74, 74, 1)', cssVar: '$color-neutral-dark' },
          { name: 'Neutral Light', value: 'rgb(203, 203, 203)', cssVar: '$color-neutral-light' },
          { name: 'Neutral Beige', value: 'rgba(249, 247, 247, 1)', cssVar: '$color-neutral-beige' },
          { name: 'Neutral White', value: 'rgb(255, 255, 255)', cssVar: '$color-neutral-white' },
        ],
      },
    ],
  },
};

export const SemanticColors: Story = {
  args: {
    colorGroups: [
      {
        name: 'Semantic Colors',
        colors: [
          { name: 'Success', value: 'rgba(110, 216, 35, 1)', cssVar: '$color-success' },
          { name: 'Warning', value: 'rgba(255, 162, 29, 1)', cssVar: '$color-warning' },
          { name: 'Error', value: 'rgba(197, 0, 0, 1)', cssVar: '$color-error' },
          { name: 'Secondary', value: 'rgba(54, 216, 231, 1)', cssVar: '$color-secondary' },
        ],
      },
    ],
  },
};
