import resolve from 'rollup-plugin-node-resolve'

export default {
    input: './es/index.js',
    output: {
        file: './sugar.js',
        format: 'cjs',
        name: 'sugar'
    },
    plugins: [resolve()]
};