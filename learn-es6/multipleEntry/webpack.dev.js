console.log('webpack.dev');


const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = require('./config');

let plugins = [],
    entrys = {};


config.htmlDirs.forEach((item,index)=>{
    entrys[item['name']] = __dirname + '/libs/src/'+ item['name'] + '/'+ 'index.js';
    let plugin = new HtmlWebpackPlugin({
        filename:item['name'] + '.html',
        template: __dirname + '/libs/src/'+item['name']+'/'+ 'index.html',
        title:item['title'],
        chunks: [item['name']]
    });
    plugins.push(plugin);
});


module.exports = {
    // entry:__dirname + '/libs/main.js',
    entry: entrys,
    output:{
        path:__dirname+'/dist/',
        filename:'[name].[hash].js'
    },
    devServer: {
        contentBase:__dirname +'/dist/',
        port:'7004',
        index:'home.html' //索引文件
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_module/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },
            {
                test:/\.(png|jpe?g|gif|svg|ttf|eot|woff)$/,
                use:['url-loader?limit=1024']
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename:'style.css'
        }),
        // new HtmlWebpackPlugin({
        //     title:'learn-es6'
        // }),
        ...plugins
    ]
}
