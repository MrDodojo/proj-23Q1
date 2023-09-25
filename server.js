'use strict';

const express = require('express');

//const livereload = require("livereload");

//const liveReloadServer = livereload.createServer();
//liveReloadServer.watch('./views/', './views/');

// Constants
const PORT = 43400;

// App
const app = express();
app.set('view engine', 'ejs');

const indexRouter = require('./routes/indexRoute');

app.use('/', indexRouter);

app.listen(PORT);
console.log(`Running on:${PORT}`);