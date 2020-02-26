// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

    clearMocks: true,

    collectCoverageFrom: [
        "!src/redux/store/initialState.js",
        "src/**/*.js",
        "!data/keyMap.js",
        "!/node_modules/"
    ],


    coverageDirectory: "coverage",


    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|scss)$": "identity-obj-proxy"
    },


    setupFiles: [
        "<rootDir>/src/setupTests.js"
    ],


    testEnvironment: "jsdom"

};
