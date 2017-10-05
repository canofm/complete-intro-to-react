/* eslint no-console:0 */
require('babel-register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');
const cors = require('cors');
const compression = require('compression');
const App = require('./app/components/App').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const buffer = fs.readFileSync('./data.json');
const showsObj = JSON.parse(buffer);

const server = express();
server.use(compression());
server.use(cors());
const ratedShows = showsObj.shows.map(show =>
  Object.assign(
    { rating: `${Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}` },
    show
  )
);

const compiler = webpack(config);

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
server.use(webpackHotMiddleware(compiler));

server.use('/public', express.static('./public'));
server.get('/:id', (req, res) => {
  const show = ratedShows.find(item => item.imdbID === req.params.id);
  if (show) {
    console.log(show.title);
    setTimeout(() => res.json(show), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: 'show not found' });
  }
});

server.use((req, res) => {
  console.log(req.url);
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
  );

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body }));
  res.end();
});

console.log(`listing on ${port}`);
server.listen(port);
