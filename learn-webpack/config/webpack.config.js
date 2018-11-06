console.log('webpack.config.js');
module.exports = {
    mode:'development',
    devtool:'source-map',
    entry:__dirname + '/libs/main.js',
    output:{
        path:__dirname + '/libs/',
        filename:'bundle.js'
    }
};
