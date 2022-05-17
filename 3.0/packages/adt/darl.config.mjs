import { npm, node, sub, once, queue } from 'darl'

export const build = once([
    npm`tsc`('--', '--emitDeclarationOnly'),
    queue(
        npm`swc`('--', './src', '-d', 'es', '--config-file', '../../es.swcrc'),
        sub(
            npm`babel`('--', '--config-file', '../../babel.config.esm.mjs', 'es', '-d', 'esm', '--out-file-extension', '.mjs'),
        )
    ),
    npm`swc`('--', './src', '-d', 'cjs', '--config-file', '../../cjs.swcrc'),
    npm`rollup`('--', '-c'),
    npm`rollup`('--', '-c', 'rollup.config.cjs.js'),
    npm`rollup`('--', '-c', 'rollup.config.es.js'),
    npm`rollup`('--', '-c', 'rollup.config.min.js'),
])
