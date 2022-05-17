import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: './src/index.ts',
    output: {
        file: './dist/sugar.umd.js',
        format: 'umd',
        name: 'sugar'
    },
    plugins: [typescript(), resolve()]
};