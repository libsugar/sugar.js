import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: './src/index.ts',
    output: {
        file: './dist/sugar.seq.cjs',
        format: 'cjs',
        name: 'sugar.seq',
    },
    plugins: [typescript(), resolve()],
}
