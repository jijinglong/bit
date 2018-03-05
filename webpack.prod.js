const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        // 能够删除未引用代码(dead code)的压缩工具(minifier)
        new UglifyJSPlugin(),

        // views 中的 js 文件能跟踪到 process.env.NODE_ENV
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
