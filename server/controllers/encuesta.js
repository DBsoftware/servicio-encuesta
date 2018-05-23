'use strict';


var mongoose = require('mongoose'),
    Encuesta = mongoose.model('Encuesta');

exports.list_all_encuestas = (req, res) => {
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
            });
        });
};

exports.get_encuestaByID = (req, res) => {
    let id = req.params.id;

    Encuesta.findOne({ 'cedula': id }, {}, { sort: { 'fecha': -1 } }, (err, encuestaDB) => {
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
}

exports.create_encuesta = (req, res) => {
    let body = req.body;

    let encuesta = new Encuesta(body);
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
}

exports.update_encuesta = (req, res) => {
    let id = req.params.id;
    let body = req.body;

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
}
exports.delete_encuesta = (req, res) => {
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
}