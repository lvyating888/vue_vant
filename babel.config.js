const {plugins} = require("eslint-plugin-vue/lib/configs/base");
module.exports = {
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
};