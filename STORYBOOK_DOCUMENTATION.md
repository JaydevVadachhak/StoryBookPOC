# Storybook Documentation for Angular Components

## 1. What is Storybook?

Storybook is an open-source tool for building UI components and pages in isolation. It serves as a development environment and playground for UI components. With Storybook, you can visualize different states of your UI components and develop them interactively without worrying about application business logic, dependencies, or requirements.

In this project (`StoryBookPOC`), Storybook is being used to document and showcase a design system called "Liquid Design".

## 2. Prerequisites for Using Storybook with Angular

To work with Storybook in an Angular project like this one, you'll need:

- **Node.js**: This project uses Node.js version 22.16.0
- **npm**: This project uses npm version 11.4.2
- **Angular**: This project uses Angular version 20.0.3
- **@storybook/angular**: The Storybook adapter for Angular (version 9.0.12 in this project)

Additionally, you'll need familiarity with:
- TypeScript
- Angular components
- Angular modules and dependency injection
- Basic CSS/SCSS knowledge

## 3. What is Storybook Used For?

Storybook serves several key purposes in this project:

1. **Component Documentation**: It provides a living, interactive documentation for all UI components
2. **Design System Implementation**: Helps implement and maintain the "Liquid Design" system
3. **Visual Testing**: Enables visual regression testing through integration with Chromatic
4. **Development in Isolation**: Allows developers to build components independently from the main application
5. **Collaboration**: Facilitates communication between designers, developers, and stakeholders by providing a shared reference for UI components

## 4. Main Concepts of Storybook

### Stories

A story represents a single state of a component. Each component can have multiple stories, each showcasing the component in a different state or configuration.

### Addons

Addons extend Storybook's functionality. This project uses several addons:
- **@storybook/addon-docs**: For automatic documentation generation
- **@storybook/addon-onboarding**: For onboarding new developers
- **@storybook/addon-styling-webpack**: For handling styles properly

### Decorators

Decorators wrap your stories with additional functionality. In this project, decorators are used to:
- Provide necessary Angular providers
- Add styling and spacing around components for better visualization

### Args

Args are inputs passed to your component stories. They allow you to control the component's properties dynamically through the Storybook UI.

### Controls

Controls provide a UI to modify the args of your stories in real-time. This project extensively uses controls to demonstrate different component states.

## 5. Stories and Addons in This Project

### Stories Structure

In this project, stories are organized in the `src/stories` directory:

```
src/stories/
├── foundations/
│   ├── Colors.stories.ts
│   ├── Shadows.stories.ts
│   └── Typography.stories.ts
├── shared/
│   └── components/
│       ├── Alert.stories.ts
│       ├── Banner.stories.ts
│       ├── CircleBadge.stories.ts
│       ├── Radio.stories.ts
│       ├── StatusBadge.stories.ts
│       └── Toggle.stories.ts
└── Welcome.mdx
```

### Example Story

Here's an example story from `Banner.stories.ts`:

```typescript
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
    // ... other argTypes
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

// ... other story variants
```

### Addons Configuration

The addons are configured in `.storybook/main.ts`:

```typescript
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-styling-webpack"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;
```

### Setting Up a New Component Story

To create a story for a new component:

1. Create a new file in the `src/stories/shared/components` directory named `[ComponentName].stories.ts`
2. Import your component and necessary dependencies
3. Define a `meta` object with the component configuration
4. Export the `meta` object as the default export
5. Define individual stories as exported constants with different `args` values
6. Run Storybook to see your new component stories

## 6. Integrating Storybook with an Existing Angular Project

To integrate Storybook with an existing Angular project similar to this one:

1. **Install Storybook**:
   ```bash
   npx storybook@latest init
   ```

2. **Configure Angular Integration**:
   - Ensure your `tsconfig.json` is properly configured to work with Storybook
   - Add necessary imports for Angular providers in your stories

3. **Set Up Component Documentation**:
   - Install Compodoc: `npm install --save-dev @compodoc/compodoc`
   - Generate documentation JSON: `npx compodoc -p tsconfig.json -e json -d .`
   - Configure Storybook to use the documentation by setting up the preview.ts file similar to this project

4. **Create Your First Stories**:
   - Follow the pattern used in this project's story files
   - Start with simple components and gradually add more complex ones

5. **Add NPM Scripts**:
   ```json
   "scripts": {
     "storybook": "ng run YourProjectName:storybook",
     "build-storybook": "ng run YourProjectName:build-storybook"
   }
   ```

6. **Run Storybook**:
   ```bash
   npm run storybook
   ```

## 7. Testing in Storybook

This project has several testing approaches integrated with Storybook:

### Visual Testing with Chromatic

Chromatic is integrated for visual regression testing. It captures screenshots of your components and compares them across changes to detect visual regressions.

Setup in this project:
1. The `chromatic.js` script handles the integration with environment variables:
   ```javascript
   require('dotenv').config();
   const { spawnSync } = require('child_process');
   const result = spawnSync('npx', ['chromatic', `--project-token=${process.env.CHROMATIC_TOKEN}`], {
     stdio: 'inherit',
     encoding: 'utf-8'
   });
   process.exit(result.status);
   ```

2. To run Chromatic tests:
   ```bash
   npm run chromatic
   ```

3. Environment setup:
   - Create a `.env` file with your Chromatic token: `CHROMATIC_TOKEN=your_token_here`

### Interaction Testing

While commented out in this project, you can enable interaction testing using `@storybook/testing-library` and `@storybook/jest`:

```typescript
// From Toggle.stories.ts (currently commented out)
// import { expect } from '@storybook/jest';
// import { userEvent, within } from '@storybook/testing-library';

// To add an interaction test to a story:
export const WithInteraction = {
  args: { /* component props */ },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Clicked!')).toBeInTheDocument();
  },
};
```

### Integration with Angular Testing

You can combine Angular's testing utilities with Storybook stories:

1. Create a regular Angular test that imports your component
2. Use the same props as defined in your stories
3. Validate component behavior using TestBed

Example based on this project's structure:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsiBanner } from './psi-banner';

describe('PsiBanner', () => {
  let component: PsiBanner;
  let fixture: ComponentFixture<PsiBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(PsiBanner);
    component = fixture.componentInstance;
    
    // Use the same props as in your Storybook story
    component.subject = 'Test Subject';
    component.message = 'Test Message';
    component.type = 'success';
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more specific tests
});
```

## 8. Known Limitations and Compatibility Issues

### Angular Version Compatibility

- This project uses Angular 20.0.3 with Storybook 9.0.12
- Storybook versions are tightly coupled with Angular versions
- When upgrading Angular, you'll need to update Storybook to a compatible version

### Common Issues

1. **Module Not Found Errors**:
   - Make sure all necessary providers are included in your story decorators
   - Use `applicationConfig` with `importProvidersFrom` for Angular dependencies

2. **Styling Issues**:
   - This project uses SCSS
   - Global styles need to be imported in the `.storybook/preview.ts` file
   - Component-specific styles are automatically included

3. **Testing Library Compatibility**:
   - The interaction testing libraries are commented out in this project
   - When enabling them, ensure compatibility with your Storybook version

4. **Performance Issues with Large Component Libraries**:
   - For large projects, consider using Storybook's on-demand loading feature
   - Split your stories into smaller, more focused files

### Browser Compatibility

Storybook works in all modern browsers but may have issues in:
- Internet Explorer (unsupported)
- Older versions of Edge, Chrome, Firefox, and Safari

## Running Storybook in This Project

To start Storybook in this project:

```bash
npm run storybook
```

This will start Storybook on http://localhost:6006/ by default.

To build a static version for deployment:

```bash
npm run build-storybook
```

This will create a `storybook-static` directory with a deployable version of your Storybook.

---

This documentation covers the fundamentals of using Storybook with Angular, specifically tailored to the `StoryBookPOC` project structure. As you become more familiar with Storybook, you can explore more advanced features and integrations. 