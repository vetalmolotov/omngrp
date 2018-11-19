var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");


var conf = {
	entry : './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer : {
		overlay: true //вывод ошибок на страницу
	},
	module: {
		rules: [

			{ // обработчик LESS
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					fallback: "style-loader"
				})
			}
		]
	},
	plugins: [
    	new ExtractTextPlugin("styles.css")
	],
	devtool: 'eval-sourcemap'
};

module.exports = conf;
