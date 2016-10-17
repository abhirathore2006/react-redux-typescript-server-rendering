var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
	devtool: 'inline-source-map',
	entry: [
		'./src/client/client.tsx'
	],
	output: {
		path: path.join(__dirname, './src/client'),
		filename: 'bundle.js',
		publicPath: "/"
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.ts(x?)$/,
				loaders: ['babel-loader?cacheDirectory,presets[]=react,presets[]=es2015', 'ts'],
				include: path.join(__dirname, 'src')
			}
    ]
	},
	resolve: {
		root: [path.resolve('./src')],
		extensions: ['', '.jsx', '.js', '.tsx', '.ts']
	}
};
