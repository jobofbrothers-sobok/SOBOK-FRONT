const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://b.sobok.co.kr/api',
            changeOrigin: true,
        })
    );
};