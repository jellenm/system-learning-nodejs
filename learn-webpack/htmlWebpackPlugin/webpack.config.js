
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry:__dirname + '/libs/main.js',
    output:{
        path:__dirname + '/dist/',
        filename:'bundle.js'
    },
    devServer:{
        contentBase:__dirname + '/dist',
        port:7002
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },
            {
                test:/\.js/,
                use:['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename:'style.css'
        }),
        new HtmlWebpackPlugin()
    ]
}
