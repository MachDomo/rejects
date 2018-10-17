const express = require('express');
const webpack = require('webpack');

const port = 3000;

const app = express();

console.log('ENV: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  const middleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(require('./webpack.config'));
  app.use(middleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log('App listening on port ', port);
});
