import { merge } from 'webpack-merge';
import configCommon from './webpack.common';
import configDevelopment from './webpack.dev';
import configProduction from './webpack.prod';

const config = (env: any, args: { mode: any; }) => {
    switch(args.mode) {
        case 'development':
            return merge(configCommon, configDevelopment);
        case 'production':
            return merge(configCommon, configProduction);
        default:
            throw new Error('No matching configuration was found!');
    }
}

export default config




