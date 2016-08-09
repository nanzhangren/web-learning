var config = {
    entry: {
        inquire: './source/index.js'
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
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;