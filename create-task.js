module.exports = (pluginContext) => {
    const cwd = pluginContext.cwd
    const exec = require('child_process').exec

    return (value, env = {}) => {
        return new Promise((resolve, reject) => {
            exec(`osascript ${cwd}/omnifocus.scpt '${value}'`, (err, stdout, stderr) => {
                console.log(err, stdout, stderr)
                resolve()
            })
        })
    }
}