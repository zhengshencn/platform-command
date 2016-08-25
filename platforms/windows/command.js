var childProcess = require('child_process');

function windowsCmd(cmd, callback, options) {
    try {
        var outputConsoleBuffer = "";
        var process = null;
        if (options) {
            process = childProcess.spawn('bash', options);
        }
        else {
            process = childProcess.spawn('bash');
        }

        process.stdout.setEncoding('utf8');

        callback && process.on('close', function (code) {
            var error = code === 0 ? 0 : 1;
            callback(error, outputConsoleBuffer);
        });

        process.stdout.on('data', function (data) {
            outputConsoleBuffer += data;
            console.log(data);
        });

        process.stdin.write(cmd + '\n');
        process.stdin.end();

    } catch (e) {
        throw new Error("Please, install cygwin on windows.")
    }
}

module.exports = {
    exec: function (cmd, callback, options) {
        windowsCmd(cmd, callback, options);
    }
}
