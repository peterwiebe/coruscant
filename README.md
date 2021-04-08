# Coruscant

## Local Development

### Initialization steps

1. Install dependencies with `yarn` (at the root directory)
2. Determine your local IP address (should start with 197. or 10.)
3. Rename **.local.env.example** 👉 **.local.env** in _jedi-temple_ directory and paste your local IP address to the `API_DOMAIN` value

### Start development servers

1. In separate terminals run `yarn start:api` and `yarn start:app`
2. Open a browser and navigate to [http:localhost:4200](http:localhost:4200)

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
