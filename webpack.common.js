const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './views/index.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-stage-3', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        // 在每次构建前清理 dist 文件夹
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, './public/')
        })
    ]
};
