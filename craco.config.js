module.exports = {
    devServer: {
        port: 3002,
        proxy: {
            '/api': {
                target: process.env.REACT_APP_API_URL,
                pathRewrite: { '^/api': '' },
                secure: false,
                changOrigin: true
            }
        }
    },
}