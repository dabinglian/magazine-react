var webpack = require("webpack");

module.exports = {
	entry: "./src/static/js/main.js",
	output: {
		path: "./dist",
		filename : "bundle.js"
	},
	module: {
		loaders : [
			{
		        test: /\.js[x]?$/,
		        exclude: /node_modules/,
		        loader: 'babel',
		        query: {
		        	presets: ["es2015", "react"]
		        }
		    },
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg)$/,
　　　　　　	loader: 'url-loader'
			}
		]
	}
}