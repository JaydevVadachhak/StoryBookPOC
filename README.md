# StoryBookPOC

ng version: 20.0.3
node version: 22.16.0
npm version: 11.4.2

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Environment Variables

This project uses dotenv to manage environment variables for sensitive information like API tokens.

### Chromatic

The Chromatic token is stored in a `.env` file at the project root:

```
CHROMATIC_TOKEN=your_token_here
```

To run Chromatic:

```bash
npm run chromatic
```

For CI/CD pipelines, you can either:
1. Create a `.env` file during the build process
2. Set environment variables directly in your CI platform

**Note:** The `.env` file is ignored by git to keep sensitive information out of version control.
