module.exports = {
    devServer: {
        proxy: process.env.NODE_ENV === 'production' ? 'http://bingo.store.com' : 'http://bingo.store.com',
    },
    lintOnSave: false
}