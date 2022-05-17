import { npm, node, sub, once, queue } from 'darl'

export const build = once([
    npm`tsc`('--', '--emitDeclarationOnly'),
])
