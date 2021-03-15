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
	resolve: {
		alias: {
			'cesiumMaterialsManager/store': path.resolve(srcPath, 'cesiumMaterialsManager', 'store.js'),
			reducers: path.resolve(srcPath, 'reducers'),
			materialsApi: path.resolve(srcPath, 'materialsApi.js')
		},
		extensions: ['.js', '.jsx']
	},
	devServer: {
		port: 8080
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
