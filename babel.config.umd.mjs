import { fileURLToPath } from 'url'
import { basename, dirname, join, normalize, extname } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const dir = join(__dirname, './es')

/** @type {Map<string, string[]>} */
const moduleIds = new Map

function getModuleId(/** @type {string} */name) {
    const file = basename(name, '.js')
    const dir = basename(dirname(name))
    if (dir == 'bop') {
        if (file == 'index') return ['sugar', 'bop']
        return ['sugar', 'bop', file]
    }
    if (dir == 'math') {
        if (file == 'index') return ['sugar', 'math']
        return ['sugar', 'math', file]
    }
    if (file == 'index') return ['sugar']
    return ['sugar', file]
}

function getDoduleIds(/** @type {string} */dir) {
    const files = fs.readdirSync(dir)

    for (const file of files) {
        const path = normalize(join(dir, file))
        if (extname(path) == '') {
            getDoduleIds(path)
            continue
        }

        const id = getModuleId(path)

        moduleIds.set(path, id)
    }
}
getDoduleIds(dir)

// console.log(moduleIds)

// console.log()

const globals = Object.fromEntries([...moduleIds.entries()].flatMap(([k, id]) => {
    return [
        [id.join('/'), id.join('.')],
        [`.${k.substring(dir.length).replaceAll('\\', '/')}`, id.join('.')]
    ]
}))
// console.log(globals)

export default {
    moduleIds: true,
    getModuleId(/** @type {string} */name) {
        const r = getModuleId(name).join('/');
        return r
    },
    plugins: [
        ['@babel/plugin-transform-modules-umd', {
            globals: globals,
            exactGlobals: true,
        }],
        ['babel-plugin-add-import-extension', {
            extension: 'js'
        }],
    ],
}
