var path = require('path');

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js"
    },
    //devtool: 'source-map',
    resolve: {
        alias: {
            //highcharts: '../node_modules/highcharts'
        },
    //{ 'angular2/core' : "../../node_modules/angular2/core.d.ts" },
        extensions: ['', '.webpack.js', '.web.js', '.ts',  '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    devServer: {
        contentBase: "./src",
        hot: true
    },
    noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ]
};