var config = {
    entry: './source/main.js',

    output: {
        path:'./output/',
        filename: 'index.js',
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