const path = require("path");

module.exports = {
    entry: "./src/screens/FortemIOHomePage/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'html-loader',
            test: '/\.js|jsx/',
            exclude: '/node_modules/'
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}

