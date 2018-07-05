/**
 * path is a custom variable and require is a node js function to include
 * path functions
 */
const path = require( 'path' );

module.exports = {

	// Path to where the input file reside.
	entry: './src/app.js',
	output: {

		/**
		 * Here we will set the absolute path to the file
		 * where you want to output your file using node js function
		 * path.join() which joins two paths, __dirname gives absolute
		 * path till the root dir
		 */
		path: path.join( __dirname, 'public' ), // result /Applications/MAMP/htdocs/react-course-project/indecision-app/public
		filename: "bundle.js"
	},

	// We set modules configuration here to set rules for babel-loader
	module: {

		// Array of rules
		rules: [{
			// define babel-loader to run babel
			loader: "babel-loader",
			// What files does this loader need to run on inside reg-exp ( here all js files )
			test: /\.js$/,
			// What files you want to exclude ( excluding node_module dir here )
			exclude: /node_module/
		}, {
			// This will include any file that ends with .scss and .css
			test: /\.s?css$/,
			// use allows us to provide an array of loaders.
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},

	// We set devtools configuration here to handle errors
	devtool: "cheap-eval-source-map",

	// Set up dev server configurations
	devServer: {
		contentBase: path.join( __dirname, 'public' ), // result /Applications/MAMP/htdocs/react-course-project/indecision-app/public
		historyApiFallback: true
	}
};

