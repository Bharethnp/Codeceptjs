exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.google.com',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'puppeteer-codeceptjs',
  multiple: {
    basic: {
      "browsers": [
        {"browser": "chrome", "windowsize": "maximize"}
      ]
    }
  },
}