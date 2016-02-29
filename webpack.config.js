var path = require('path')

module.exports = {
    entry: [
        'babel-polyfill',
        './src/app.js'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve('./public'),
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        root: 'src',
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        contentBase: "./public",
        port: 8080,
        inline: true
    },
}
