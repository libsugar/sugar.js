import resolve from 'rollup-plugin-node-resolve'

export default {
    input: './es/index.js',
    output: {
        file: './sugar.mjs',
        format: 'es',
        name: 'sugar'
    },
    plugins: [resolve()]
};