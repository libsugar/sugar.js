import resolve from 'rollup-plugin-node-resolve'

export default {
    input: './es/index.js',
    output: {
        file: './dist/sugar.js',
        format: 'umd',
        name: 'uid'
    },
    plugins: [resolve()]
};