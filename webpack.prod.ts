// import path from 'path'
// import { fileURLToPath } from 'url';
// import webpack from 'webpack';

import paths from './webpack.paths';

import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const configProduction: any = {

    mode: 'production',

    devtool: 'source-map',

    entry: {
        'block.gl': [paths.entryPoint],
        'block.gl.min': [paths.entryPoint]
    },

    resolve: {
        extensions: [
            '.ts', '.tsx',
            '.js', '.jsx',
        ],
    },

    output: {
        library: 'block.gl',
        libraryTarget: 'umd',
        libraryExport: 'default',
        // path: path.resolve(__dirname, "./lib/"),
        path: paths.lib,
        // path: "/lib",
        filename: '[name].js',
        umdNamedDefine: true
    },

    stats: {
        errorDetails: true,
        children: true
    }

    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ]

};

export default configProduction