const chalk = require('chalk');

module.exports = {
    name: "connecting",
    execute() {
        console.log(chalk.blueBright("[Database Status]: Connecting..."));
    },
};