const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const srcPath = path.resolve('src');

module.exports = {
	entry: path.resolve(srcPath, 'index.jsx'),
	output: {
		filename: 'cesium-materials-manager.js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react']
						}
					}
				]
			},
			{
				test: /\.s?css/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader'
				]
			},
		]
	},
	devServer: {
		port: 8080,
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './template.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.scss'
		})
	],
	devtool: 'source-map'
};
