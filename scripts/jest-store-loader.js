const fs = require('fs')
const path = require('path')

const StoreLoader = (module) => {
    const files = fs.readdirSync(
        path.join(__dirname, '../mocks', module),
        { encoding: 'utf-8' }
    ).map(fileName => fileName.split('.').slice(0, -1).join('.'))
    const mocks = files.reduce((obj, key) => {
        const mock = require(
            path.join(__dirname, '../mocks', module, key + '.json')
        )
        return { ...obj, [key]: mock }
    }, {})
    const cache = files.reduce((obj, key) => {
        const result = fs.readFileSync(
            path.join(__dirname, '../cache', module, key + '.txt'),
            { encoding: 'utf-8' }
        )
        return { ...obj, [key]: result }
    }, {})
    return { keys: files, mocks, cache }
}

module.exports = StoreLoader