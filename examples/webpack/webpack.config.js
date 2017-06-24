var path = require('path');

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts',  '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ],
        noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ]
    },
    devServer: {
        contentBase: "./src",
        hot: false
    }
};