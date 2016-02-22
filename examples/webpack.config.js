module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js"
    },
    //devtool: 'source-map',
    resolve: {
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