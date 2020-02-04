// const webpack = require('webpack');
import * as webpack from 'webpack';

// const path = require('path');
import * as path from 'path';

function resolve(dir: string): string {
    const p:string = path.resolve(__dirname, '..', dir);
    return p;
}

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    target: 'node',

    entry: {
        index: resolve('./entry/index.ts')
    },
    output: {
    //输出目录
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: path.resolve('/'),
        library: 'pkg_name',
        libraryTarget: 'commonjs2'
    },
    externals: {},
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {}
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
