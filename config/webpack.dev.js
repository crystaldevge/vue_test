const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    // entry: './src/main.js',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].[contenthash].vue',
    //     publicPath: '/',
    // },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        liveReload: true,
        compress: true,
        port: 4200,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'vuetest',
            filename: 'remoteEntry.js',
            exposes: {
                './VueTestApp': './src/main',
            },
            shared: {
                vue: {
                  singleton: true,
                  eager: true,
                  requiredVersion: packageJson.dependencies.vue,
                },
            },
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);