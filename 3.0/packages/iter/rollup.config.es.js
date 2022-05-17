import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: './src/index.ts',
    output: {
        file: './dist/sugar.iter.mjs',
        format: 'es',
        name: 'sugar.iter',
    },
    plugins: [typescript(), resolve()],
}
