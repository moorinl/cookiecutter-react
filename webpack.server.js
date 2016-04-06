var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


new WebpackDevServer(webpack(config), {
	hot: true,
	historyApiFallback: true,
	publicPath: config.output.publicPath
}).listen(8000, 'localhost', function(err, result) {
	if (err) {
		return console.log(err);
	}

	console.log('Listening at http://0.0.0.0:8000/');
});
