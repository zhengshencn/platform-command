module.exports = function () {
    if (isWindows()) {
        return require("./platforms/windows/command.js");
    }
    return require("./platforms/childProcess/command.js");
}();

function isWindows() {
    return /^win/.test(process.platform);
}
