require('ts-node').register({
    require: ['tsconfig-paths/register'],
    transpileOnly: true,
})
const setupQueryEnv = require('../src/core/query/tests/scripts/global-setup')
const setupScraperEnv = require('../src/core/scraper/tests/scripts/global-setup')

module.exports = async function globalSetup() {
    await setupQueryEnv()
    await setupScraperEnv()
}