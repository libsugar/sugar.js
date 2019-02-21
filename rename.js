process.title = 'rename'
const dir = process.argv[2]
if (dir == null) {
    console.log(`Need path`)
    return
}

const path = require('path')
const fs = require('fs')

rename(dir)

async function rename(dirpath) {
    for (const filename of await fs.promises.readdir(dirpath)) {
        const filepath = path.join(dirpath, filename)
        const filestat = await fs.promises.stat(filepath)
        if (filestat.isDirectory()) {
            rename(filepath)
        } else if (filestat.isFile()) {
            if (path.extname(filepath) === '.js') {
                const newpath = `${filepath.slice(0, -2)}mjs`
                await fs.promises.rename(filepath, newpath)
                console.log()
                console.log(`${filepath} → ${newpath}`)
            }
            
        }
    }
}

