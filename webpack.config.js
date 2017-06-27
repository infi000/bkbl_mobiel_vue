/*
 * @Author: 张驰阳
 * @Date:   2017-06-23 11:39:30
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-06-27 16:26:43
 */

'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const plugin_etp = new ExtractTextPlugin({
    filename: '[name].css',
    ignoreOrder: true,
});
const PATHS = {
    'component': ['./js/component/bar.js', './js/component/bn.js', './js/component/cb.js', './js/component/hd.js'],
    index: path.join(__dirname, 'js/index'),
    build: path.join(__dirname, 'build'),
};
module.exports = {
    devServer: {
        host: process.env.HOST, // Defaults to `localhost`
        port: 8000, // Defaults to 8080
        overlay: {
            errors: true,
            warnings: true,
        },
        hot: true, // 告诉 dev-server 我们在使用 HMR
        inline:true
    },
    entry: {
        component: PATHS.component,
        index: PATHS.index,
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /lib/,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: {
                emitWarning: true,
            },
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: plugin_etp.extract({
                use: {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                fallback: 'style-loader',
            }),
        }],
    },
    plugins: [
        plugin_etp,
        new webpack.HotModuleReplacementPlugin() // 启用 HMR
    ],
};
