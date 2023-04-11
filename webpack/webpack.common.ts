// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import miniCss from 'mini-css-extract-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: miniCss.loader,
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: { localIdentName: '[path][local]' },
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.scss'],
		modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		preferRelative: true,
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
		new miniCss({
			filename: 'style.css',
		}),
	],
};

export default config;
