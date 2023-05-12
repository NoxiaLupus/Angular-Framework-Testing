module.exports = {
    src_folders : [""],
    test_settings: {
        default: {
            webdriver: {
                start_process: true,
                server_path: require('chromedriver').path,
                port: 4444,
            },
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        test_workers: {
            enabled: true,
            workers: 'auto'
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            },
            webdriver: {
                start_process: true,
                port: 4446,
                server_path: require('geckodriver').path
            }
        }
    }
};