exports.config = {
    framework: "jasmine",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['app-spec.js',
        'addition-spec.js',
        'subtraction-spec.js',
        'multiplication-spec.js',
        'division-spec.js'],
    multiCapabilities: [{
        browserName:'firefox'
    }, {
        browserName: 'chrome'
    }]
  };