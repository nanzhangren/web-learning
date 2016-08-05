var config = {
    entry: {
        index: ['./source/index.js'],
        pay: ['./source/pay.js'],
        inquire: './source/inquire.js'
    },

    externals: {
        main: true
    },

    output: {
        path:'./output/',
        filename: '[name].output.js'
    },

    devServer: {
        inline: true,
        port: 8888
    },

    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;