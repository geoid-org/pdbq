import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const configPaths: any = {

    src: path.resolve(__dirname, '/src'),

    build: path.resolve(__dirname, '/build'),

    public: path.resolve(__dirname, '/public'),

    lib: path.resolve(__dirname, './lib'),

    entryPoint: path.resolve(__dirname, 'src/lib/index.ts'),
    // entryPoint: path.resolve(__dirname, 'src/index.ts'),
    bundles: path.resolve(__dirname, '_bundles'),
};

export default configPaths