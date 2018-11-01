console.log('webpack.config.js');

const webpack = require('webpack');
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
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    }
}
