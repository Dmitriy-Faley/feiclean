const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
//const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")


const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    // BASE config
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: `${PATHS.src}/js/postcss.config.js`
                        }
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: `${PATHS.src}/js/postcss.config.js`
                        }
                    }
                },

            ]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",

                    config: {
                        path: `${PATHS.src}/fonts/postcss.config.js`
                    }
                }
            }]
        }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        // Copy HtmlWebpackPlugin and change index.html for another html page
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/spare-parts-1.html`,
            filename: './spare-parts-1.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/spare-parts-2.html`,
            filename: './spare-parts-2.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/spare-parts-3.html`,
            filename: './spare-parts-3.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/contacts.html`,
            filename: './contacts.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/about-company.html`,
            filename: './about-company.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/equipment-parts-1.html`,
            filename: './equipment-parts-1.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/equipment-parts-2.html`,
            filename: './equipment-parts-2.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/services-2.html`,
            filename: './services-2.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/services.html`,
            filename: './services.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        }),
         /* new GoogleFontsPlugin({
             fonts: [{
                     family: "Montserrat",
                     variants: ["400,700,800,900"]
                 },
                 {
                     family: "Crimson Text",
                     variants: ["400,600,700"]
                 }
             ],
         }), */
        new CopyWebpackPlugin([{
                from: `${PATHS.src}/img`,
                to: `${PATHS.assets}img`
            },
            {
                from: `${PATHS.src}/static`,
                to: ''
            },
        ])
    ],
}