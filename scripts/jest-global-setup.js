const fs = require('fs/promises')
const path = require('path')
const fetch = require('node-fetch')

const mockDir = path.join(__dirname, '../mock')

const downloadHtmlMock = async fileName => {
    const filePath = path.join(mockDir, 'html', fileName + '.html')
    try {
        await fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' })
    } catch (err) {
        const url = 'https://bdocodex.com/' + fileName.replace(/\./g, '/') + '/'
        const response = await fetch(url)
        const body = await response.text()
        await fs.writeFile(filePath, body)
    }
}

const getFileList = async () => {
    const files = await fs.readdir(
        path.join(mockDir, 'json'),
        { encoding: 'utf-8' }
    )
    return files.map(file => file.split('.').slice(0, -1).join('.'))
}

module.exports = async () => {
    const files = await getFileList()
    await Promise.all(files.map(downloadHtmlMock))
}