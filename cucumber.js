module.exports = {
    default: {
        paths: ["features/**/*.feature"],
        require: [
            "step-definitions/**/*.ts",
            "hooks/**/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress",
            "allure-cucumberjs/reporter"
        ],
        formatOptions: { resultsDir: "allure-results" },
        publishQuiet: true
    }
};