const express = require('express')
const Encuesta = require('../models/encuesta')
const app = express()

app.get('/encuesta', function(req, res) {
    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 0;
    limite = Number(limite);
    Encuesta.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, encuestas) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                encuestas
            })
        })

})
app.post('/encuesta', function(req, res) {
    let body = req.body;

    let encuesta = new Encuesta({
        cedula: body.cedula,
        p1: body.p1
    });
    encuesta.save((err, encuestaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            encuesta: encuestaDB
        })
    });

})
app.put('/encuesta/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;

    delete body.cedula;

    Encuesta.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, encuestaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            encuesta: encuestaDB
        })
    })

})

app.delete('/encuesta/:id', function(req, res) {
    let id = req.params.id;
    Encuesta.findByIdAndRemove(id, (err, encuestaBorrada) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!encuestaBorrada) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usario no encontrado'
                }
            });
        }
        res.json({
            ok: true,
            encuesta: encuestaBorrada
        })

    })
})

module.exports = app;