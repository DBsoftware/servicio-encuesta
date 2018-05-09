require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/encuesta', function(req, res) {
    res.json('get encuesta')
})
app.post('/encuesta', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    }
    res.json({ persona: body });
})
app.put('/encuesta/:id', function(req, res) {
    let id = req.params.id;
    res.json({ id })
})
app.delete('/encuesta/:id', function(req, res) {
    let id = req.params.id;
    res.json({ id })
})

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${process.env.PORT}`);
})