const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',
    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options:
                    {
                       sources: false,
                    },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.png|jpg|gif$/,
                loader: "file-loader"
            }
               ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi webpack app',
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: 'nuevo-estilo.css'
        }),
        new CopyPlugin({
             patterns: [
                 { from: 'src/assets', to: 'assets/'  }
             ]
        })
    ]

}