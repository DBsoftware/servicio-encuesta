'use strict';


var mongoose = require('mongoose'),
    Encuesta = mongoose.model('Encuesta');

let errorResp = (r) => {
    return r.status(400).json({
        ok: false,
        err
    });
}
let errorRespUnq = (r) => {
    return res.status(400).json({
        ok: false,
        err: {
            message: 'Encuesta no encontrada'
        }
    });
}
let validRespond = (r, encuesta) => {
    r.json({
        ok: true,
        encuesta
    });
}

exports.list_all_encuestas = (req, res) => {
    let desde = Number(req.query.desde) || 0;
    let limite = Number(req.query.limite) || 0;
    Encuesta.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, encuesta) => (err) ? errorResp(res) : validRespond(res, encuesta));
};

exports.get_encuestaByID = (req, res) => {
    Encuesta.findOne({ 'cedula': req.params.id }, {}, { sort: { 'fecha': -1 } },
        (err, encuesta) => (err) ? errorResp(res) : validRespond(res, encuesta))
}

exports.create_encuesta = (req, res) => {
    new Encuesta(req.body).save(
        (err, encuesta) => (err) ? errorResp(res) : validRespond(res, encuesta)
    );
}

exports.update_encuesta = (req, res) => {
    Encuesta.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true },
        (err, encuesta) => (err) ? errorResp(res) : validRespond(res, encuesta)
    )
}
exports.delete_encuesta = (req, res) => {
    Encuesta.findByIdAndRemove(req.params.id,
        (err, encuesta) => {
            if (err)
                errorResp(res);
            if (!encuesta)
                errorRespUnq(res);
            validRespond(res, encuesta);
        })
}