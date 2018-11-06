const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = require('./config.js');
let entrys = {},
    htmlPlugins = [];

config.htmlDir.forEach((item,index)=>{
   entrys[item['index']] = __dirname + '/src/'+item['index'] + '/index.js';
   let htmlPlugin = new HtmlWebpackPlugin({
       filename:item['index'] + '.html',
       template:__dirname + '/src/'+item['index'] + '/index.html',
       title:item['title'],
       chunks:[item['index'],'common']
   });
   htmlPlugins.push(htmlPlugin);
});

entrys['common'] = __dirname + '/libs/common.js';

module.exports = {
    mode:'development',
    entry:entrys,
    output: {
        path:__dirname + '/dist/',
        filename:'[name].[hash].js'
    },
    devServer: {
        contentBase:__dirname + '/dist/',
        port:7005,
        index:'index.html'
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                }),
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.(png|jpe?g|gif|woff|svg|ttf|eot)$/,
                use:["url-loader?limit=1024"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename:'style.css'
        }),
        ...htmlPlugins
    ]
};
