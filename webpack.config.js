var path = require('path');
var webpack = require('webpack');
// require('./css/main.css');

module.exports = {
    entry: [
        './main.js',
        './css/main.css'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loaders: 'css-loader',
                options: { import: false }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};