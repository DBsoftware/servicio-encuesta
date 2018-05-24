const express = require('express');

const app = express();

app.use(require('./encuesta'));
app.use(require('./user'));
app.use(require('./enunciados'));

module.exports = app;