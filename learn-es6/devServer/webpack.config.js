console.log('webpack.devServer.js');
var path = require('path');
var webpack = require('webpack');
module.exports = {
    mode:'development',
    devtool:'source-map',
    entry:__dirname + '/libs/main.js',
    output: {
        path:__dirname + '/dist/',
        filename:'bundle.js'
    },
    devServer: {
        // contentBase:path.join(__dirname, "libs"),
        contentBase:path.join(__dirname, "dist"),  //注意：contentBase是指项目启动的根路径
        port:7000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
