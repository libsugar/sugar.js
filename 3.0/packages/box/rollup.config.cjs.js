import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: './src/index.ts',
    output: {
        file: './dist/sugar.box.cjs',
        format: 'cjs',
        name: 'sugar.box',
    },
    plugins: [typescript(), resolve()],
}
