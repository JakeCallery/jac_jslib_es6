'use strict';

const webpack = require('webpack');

module.exports = {
    entry: [
        './index.js',
    ],

    output: {
        filename: 'bundle.js',
        path: __dirname
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
                exclude: /node_modules/
            }
        ],

        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin({minimize: true})
        // ]

    },

    devtool: 'source-map'

};