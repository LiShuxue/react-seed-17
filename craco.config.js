// craco.config.js中目前有个bug，除了process.env.NODE_ENV，不能使用一些其他的自定义变量，如，process.env.REACT_APP_API_URL。

module.exports = {
  devServer: {
    port: 3002,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: { '^/api': '' },
        secure: false,
        changOrigin: true,
      },
    },
  },
};
