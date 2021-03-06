const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set("common", resolve("src/common"))
            .set("components", resolve("src/components"))
            .set("api", resolve("src/api"))
            .set("base", resolve("src/base"))
    }
}