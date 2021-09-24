const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	...defaultConfig,
	...{
		entry: {
			blocks: path.resolve(process.cwd(), 'src/blocks.js'),
			admin: path.resolve(process.cwd(), 'src/admin.js'),
			editor: path.resolve(process.cwd(), 'src/editor.js')
		},
		output: {
			filename: 'js/[name].js',
			path: path.resolve(process.cwd(), 'assets'),
			clean: true
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: devMode ? "css/[name].min.css" : "css/[name].css"
			})
		],
		module: {
			rules: [
				{
				  test: /\.s[ac]ss$/i,
				  use: [
					{
					  loader: MiniCssExtractPlugin.loader,
					  options: {
						esModule: false,
					  },
					},
					"css-loader",
				  ],
				},
			]
		}
	}
}
