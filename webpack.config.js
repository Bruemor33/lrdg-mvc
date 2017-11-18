var path = require('path');
var webpack = require('webpack');
// require('./css/main.css');

let config = {
    entry: [
        './main.js',
        './css/main.css'
    ],
    output: {
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // Excluding node_modules cuz duh
                loader: 'babel-loader', // Include babel (core) loader to set compile preset
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
    }
}

module.exports = config;
