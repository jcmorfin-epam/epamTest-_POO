exports.config = {

    directConnect: true,

    framework: 'jasmine',

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        'browserName': 'firefox'
    },

    baseUrl: 'localhost',

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};