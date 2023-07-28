import paths from './webpack.paths';
import webpack from 'webpack';

const configDevelopment: any = {

    target: 'web',

    mode: 'development',

    devServer: {
        historyApiFallback: true,
        watchFiles: [
            paths.src + '/*',
            paths.public + '/*',
        ],
        port: 4040,
        open: true,
        compress: true,
        hot: true,
        static: {
            directory: paths.public + '/'
        },
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

};

export default configDevelopment