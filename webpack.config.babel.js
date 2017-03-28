import webpack from 'webpack';
import path from 'path';
import HtmlwebpackPlugin from 'html-webpack-plugin';
const ROOT_PATH = path.resolve(__dirname);

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // Set to localhost if need be.

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
    entry: [
        'react-hot-loader/patch',
        path.resolve(ROOT_PATH, 'src/index')
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: process.env.NODE_ENV === 'production' ? [] : [],
                include: path.resolve(ROOT_PATH, './src')
            }
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader/webpack', 'babel']
        },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/,
            },
            {
                test: /\.svg$/,
                loader: 'babel!svg-react'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.module\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /flexboxgrid/,
            },
            {
                test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                loader: "url-loader?mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
                loader: "file-loader?name=[name].[ext]"
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file?name=[path][name].[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            components: path.resolve(ROOT_PATH, 'src/components'),
            containers: path.resolve(ROOT_PATH, 'src/containers'),
            pages: path.resolve(ROOT_PATH, 'src/pages')
        },
    },
    output: {
        path: process.env.NODE_ENV === 'production' ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/public'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'public'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: HOST,
        port: PORT
    },
    plugins: [
        /*new webpack.HotModuleReplacementPlugin(),*/
        new HtmlwebpackPlugin({
            title: 'Dashboard',
            template: 'public/index.html'
        })
    ]
};
