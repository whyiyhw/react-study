const { createProxyMiddleware } = require('http-proxy-middleware');  
  
module.exports = function(app) {  
    app.use(
        '/open',
        createProxyMiddleware({  
            target: 'http://192.168.56.102:8104',  
            changeOrigin: true,  
        })
	);
};