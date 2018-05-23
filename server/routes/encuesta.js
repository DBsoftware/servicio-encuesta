const express = require('express')
const Encuesta = require('../models/encuesta')
const app = express()
var encuestaCtrllr = require('../controllers/encuesta');

app.get('/encuesta', encuestaCtrllr.list_all_encuestas);
app.get('/encuesta/:id', encuestaCtrllr.get_encuestaByID);

app.post('/encuesta', encuestaCtrllr.create_encuesta);

app.put('/encuesta/:id', encuestaCtrllr.update_encuesta)

app.delete('/encuesta/:id', encuestaCtrllr.delete_encuesta)

module.exports = app;