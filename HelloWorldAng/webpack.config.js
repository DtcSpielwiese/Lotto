const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        styles: "./src/styles.css"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
      module: {
        rules: [
            {
                test: /\.css$/,
                use:
                    [
                     "style-loader",
                     'css-loader'
                    ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: "./src/index.html"
            }
        )
    ]
};