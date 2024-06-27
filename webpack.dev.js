const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
    plugins: [new BundleAnalyzerPlugin()],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: 4000,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
});
