const path = require('path')

module.exports = {
    entry:  './dist/public/code/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/public/code'),
        filename: 'app.js'
    },
    mode: 'production'
};