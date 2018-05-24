const express = require('express')
const Enunciado = require('../models/enunciado')
const app = express()
var enunciadosCtrllr = require('../controllers/enunciado');
app.get('/enunciados', enunciadosCtrllr.list_all_enunciados);
app.get('/enunciados/:id', enunciadosCtrllr.get_enunciadoByID);
app.post('/enunciados', enunciadosCtrllr.create_enunciado);
app.put('/enunciados/:id', enunciadosCtrllr.update_enunciado)
app.delete('/enunciados/:id', enunciadosCtrllr.delete_enunciado)

module.exports = app;