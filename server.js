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

// Statische bestanden in folder "static/" en link "/static/"
app.use('/static', express.static('static'))

// Alle pagina URLS bevattend */ gebruiken route rootRoute
const Router = require('./routes/rootRoute');
app.use('/', Router);

app.listen(PORT);
console.log(`Running on:${PORT}`);