const path = require("path")
const resolvue = dir => path.join(__dirname, dir)

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', resolvue('src/assets'))
            .set('components', resolvue('src/components'))
            .set('views', resolvue('src/views'))
            .set('common', resolvue('src/common'))
            .set('network', resolvue('src/network'))
    }
}