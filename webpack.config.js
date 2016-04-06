var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
	entry: [
		'webpack-dev-server/client?http://localhost:8000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	module: {
		loaders: [{
			exclude: /node_modules/,
			loaders: [
				'react-hot',
				'babel'
			],
			test: /\.js$/
		}, {
			loader: ExtractTextPlugin.extract('css!sass'),
			test: /\.scss/
		}]
	},
	sassLoader: {
		includePaths: [
			path.join(__dirname, 'src/scss')
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			outputs: {
				comments: false
			}
		}),
		new ExtractTextPlugin('bundle.css', {
			allChunks: true
		})
	],
	resolve: {
		modulesDirectories: [
			'node_modules',
			'src/js',
			'src/scss'
		]
	}
};

module.exports = config;
