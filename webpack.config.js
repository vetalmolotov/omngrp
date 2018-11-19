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

			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					fallback: "style-loader"
				})
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: path.resolve(__dirname, "./src/"),
							outputPath: '',
							publicPath: './',
							useRelativePaths: true
						}
					}
				]
			}
		]
	},
	plugins: [
    	new ExtractTextPlugin("styles.css")
	],
	devtool: 'eval-sourcemap'
};

module.exports = conf;
