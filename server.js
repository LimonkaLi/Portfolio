const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
'/Portfolio',
createProxyMiddleware({
  target: 'http://127.0.0.1:8080',
  pathRewrite: function (path, req) {
    return path.replace('/Portfolio/', '/')
  }
})
);
app.use(express.static('.'))
app.listen(8080);
console.log('Сервер запущен по адресу http://127.0.0.1:8080')



