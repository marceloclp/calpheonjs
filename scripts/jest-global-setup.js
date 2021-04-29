const fs = require('fs/promises')
const fetch = require('node-fetch')
const { join } = require('path')

const mockBasePath = join(__dirname, '../mocks')
const cacheBasePath = join(__dirname, '../cache')
const baseUrl = 'https://bdocodex.com/'

const getDownloadURL = (folder, fileKey) => {
    switch (folder) {
        case 'query':
            const [a, type, id, l] = fileKey.split('.')
            return Object.entries({ a, type, id, l })
                .reduce((url, [key, value]) => {
                    return url + `${key}=${value}&`
                }, baseUrl + 'query.php?')
        case 'scraper':
            return baseUrl + fileKey.replace(/[.|-]/g, '/') + '/'
    }
}

const downloadMock = async (folder, fileKey) => {
    const filePath = join(cacheBasePath, folder, fileKey + '.txt')
    // const filePath = join(basePath, folder, 'cache', fileKey + '.txt')
    try {
        await fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' })
    } catch {
        const response = await fetch(getDownloadURL(folder, fileKey))
        const body = await response.text()
        await fs.writeFile(filePath, body)
    }
}

const getFileList = async (folder) => {
    const files = await fs.readdir(
        join(mockBasePath, folder),
        { encoding: 'utf-8' }
    )
    return files
        .map(file => file.slice(0, -5))
        .filter(Boolean)
}

const downloadAll = async () => {
    const promises = ['query', 'scraper'].map(async folder => {
        const files = await getFileList(folder)
        await Promise.all(files.map(
            async fileKey => downloadMock(folder, fileKey)
        ))
    })
    await Promise.all(promises)
}

module.exports = downloadAll