'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './js/index.js',
    ],

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    resolve: {
        modules: [
            'node_modules',
            './js/jacjslib_es6'
        ]
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
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

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'html/index.html'
        })
    ],

    devtool: 'source-map'

};