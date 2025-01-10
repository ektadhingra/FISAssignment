// Load environment variables
require('./helpers/envHelper');

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,  // set to false to run headless browser
      keepBrowserState: true,
      restart: true,
      waitForNavigation: 'networkidle0',
      getPageTimeout: 90000,
      waitForTimeout: 60000,
      waitForAction: 2000,
      enableScreenshots: true,
      windowSize: '1366x768',
      incognito: true,
      enableStepLog: true,
      browser: 'chromium',
      chromium: {
        ignoreHTTPSErrors: true,
        args: [
          '--incognito',
          '--start-maximized',
          '--no-sandbox',
          '--disable-gpu',
          '--no-zygote',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding'
        ]
      },
      viewport: {
        width: 1366,
        height: 768
      }
    },
    AssertWrapper: {
      require: 'codeceptjs-assert'
    }
  },
  plugins: {
    allure: {
      enabled: true,
      outputDir: './output/allure-report',
      require: 'allure-codeceptjs'
    },
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/Assignment/*.feature',
    steps: ['./step_definitions/commonstepdefinition/resuable-actions.js',
      './step_definitions/commonstepdefinition/resuable-scripts.js',
      './step_definitions/step_definitions.js',
      './step_definitions/commonstepdefinition/api_definition.js'
    ]
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'CreateScript'
}
