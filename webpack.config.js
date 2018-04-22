const path = require('path');

module.exports={
    entry:{
        'main':path.resolve(__dirname,'src')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath:'/',
        filename:'bundle.js'
    },
     //进行调试的
    devtool:'source-map',
    module:{
        rules:[{   //编译es6和es7成es5的
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            // query: {
            //     presets: ['es2015', 'react']
            // }
        },{
            test:/\.css$/,
            use:[
                {
                    loader:'style-loader'
                },{
                    loader:'css-loader',
                    options:{
                        module:true
                    }
                }
            ]
        }]
    },
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'src'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务器压缩是否开启
        compress:true,
        //配置服务端口
        port:8080
    }
}