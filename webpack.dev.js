const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // 为了更容易地追踪错误和警告(否则就会简单地指向到 bundle.js)
    devtool: 'inline-source-map',
    plugins: [
        // views 中的 js 文件能跟踪到 process.env.NODE_ENV
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});
