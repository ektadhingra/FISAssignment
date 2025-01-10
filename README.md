# Assignment

This repository contains automated tests for the assignment using **CodeceptJS**. Follow the steps below to set up, run the tests, and generate a detailed report.

## Prerequisites

Ensure the following are installed on your machine:

- **Node.js** (v14 or higher)
- **NPM** (included with Node.js)
- **Allure Commandline** (for generating and viewing test reports)

To install Allure Commandline globally, run:

```bash
npm install -g allure-commandline --save-dev
```

## Installation

Install all required dependencies by running:

```bash
npm install
```

## Running Tests

To execute the tests for the assignment, use the following command:

```bash
npx codeceptjs run --steps --grep '@Assignment'
```

## Report Preview

![alt text](https://github.com/ektadhingra/FISAssignment/blob/main/output/allure-report/index.html)
