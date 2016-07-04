const webpack = require('webpack');
const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/main.js',
        './src/index.html'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.json$/, loader: 'json'
            },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap!stylus'
            },
            {
                test: /\.styl$/,
                loader: ExtractText.extract('css', 'css?sourceMap!stylus')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractText('styles.css', { allChunks: true })
    ]
};