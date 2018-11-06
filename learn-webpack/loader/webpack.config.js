console.log('webpack.config.js');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode:'development',
    entry:__dirname + '/libs/main.js',
    devtool:'source-map',
    output:{
        path:__dirname + '/dist/',
        filename:'bundle.js'
    },
    devServer:{
        'contentBase':__dirname + '/dist',
        'port':'7001'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },
            {
                test:/\.less$/,
                // use:['style-loader','css-loader','less-loader'],
                use:ExtractTextPlugin.extract({
                    use:['css-loader','less-loader']
                })
            },
            {
                test:/\.(png|jpe?g|svg|gif|woff|eot|ttf)$/,
                use:['url-loader?limit=1024']
            },
            {
                test:/\.js$/,
                exclude: /node_module/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename:'style.css'
        })
    ],
}
