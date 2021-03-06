import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(bodyParser.json());
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

// define the folder that will be used for static assets
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});


//start the server
const port = process.env.PORT || 3000;
const env  = process.env.NODE_ENV || 'production';

app.listen(port, () => console.log('Running on localhost:3000'));