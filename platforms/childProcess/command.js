var childProcess = require('child_process');

module.exports = {
    exec: function (cmd, callback, options) {
        if (options) return childProcess.exec(cmd, options, callback);
        return childProcess.exec(cmd, callback);
    }
}
