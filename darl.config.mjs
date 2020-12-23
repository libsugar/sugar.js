import { npm, node, sub, once, queue } from 'darl'

export const build = once([
    queue(
        npm`tsc`('--', '-p', 'tsconfig.es.json'),
        sub(
            npm`rollup`('--', '-c'),
            npm`rollup`('--', '-c', 'rollup.config.cjs.js'),
            npm`rollup`('--', '-c', 'rollup.config.es.js'),
            npm`rollup`('--', '-c', 'rollup.config.min.js'),
        ),
        node`./rename.js`('./es'),
    ),
    npm`tsc`('--', '-p', 'tsconfig.cjs.json'),
    npm`tsc`('--', '-p', 'tsconfig.umd.json'),
])