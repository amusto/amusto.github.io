// var webpack = require('webpack')
// var path = require('path')
// var HtmlWebpackPlugin = require('html-webpack-plugin')

// const VENDOR_LIBS = [
//   'faker', 'lodash', 'redux', 'react-redux', 'react-dom', 'react-input-range', 'redux-form', 'redux-thunk'
// ]

module.exports = {
	module: {
		rules: [
			{
				use: 'babel-loader',
				// test: /\.js$/,
				test: /\.(js|jsx)$/,
				exclude: /node_modules/
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			},
			{
				// test: /\.js$/,
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}
		]
	}
}
