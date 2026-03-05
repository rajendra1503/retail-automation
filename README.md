# Retail Automation Framework (Playwright + TypeScript)

This repository contains an end-to-end UI automation framework built using Playwright with TypeScript.

The framework demonstrates:
- UI test automation
- Git based workflow
- Continuous Integration using GitHub Actions
- Automated test execution on every code push

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub Actions (CI)

## Project Structure

retail-automation/
│
├── tests/              # Test scripts
├── pages/              # Page Object classes
├── utils/              # Utility/helper functions
├── docs/               # Documentation files
├── playwright-report/  # HTML test report
├── test-results/       # Raw test execution results
│
└── .github/workflows/
      └── playwright.yml   # CI pipeline configuration

## Installation

1. Clone the repository

git clone <repository-url>

2. Install dependencies

npm install

3. Install Playwright browsers

npx playwright install

## Run Tests

Run all tests:

npx playwright test

Run in headed mode:

npx playwright test --headed

## View HTML Report

After test execution:

npx playwright show-report

## Continuous Integration

This project uses GitHub Actions to run tests automatically.

The workflow runs when:
- Code is pushed to the main branch
- A pull request is created

The pipeline performs:
- Dependency installation
- Playwright browser setup
- Test execution
- Uploading test reports as artifacts

## Example Test

tests/login.spec.ts

This test verifies the login functionality of the application.

## Documentation

See the docs folder for additional documentation:

- glossary.md – automation terminology

## Author

Rajendra Gokhale

Automation Trainer | Test Automation Engineer