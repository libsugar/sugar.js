import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: './src/index.ts',
    output: {
        file: './sugar.js',
        format: 'cjs',
        name: 'sugar'
    },
    plugins: [typescript(), resolve()]
};