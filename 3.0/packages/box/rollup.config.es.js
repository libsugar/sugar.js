import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: './src/index.ts',
    output: {
        file: './dist/sugar.box.mjs',
        format: 'es',
        name: 'sugar.box',
    },
    plugins: [typescript(), resolve()],
}
