const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

    entry: path.join(__dirname, 'src', 'main.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'src', 'js', ),
            path.join(__dirname, 'src', 'js', 'components'),
            path.join(__dirname, 'src', 'js', 'pages'),
            path.join(__dirname, 'node_modules'),
        ],
    }
};