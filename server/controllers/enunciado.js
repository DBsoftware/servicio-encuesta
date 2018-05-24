'use strict';


var mongoose = require('mongoose'),
    enunciado = mongoose.model('Enunciado');

const errorResp = (r) => {
    return r.status(400).json({
        ok: false,
        err
    });
}
const errorRespUnq = (r) => {
    return res.status(400).json({
        ok: false,
        err: {
            message: 'enunciado no encontrada'
        }
    });
}
const validRespond = (r, enunciado) => {
    r.json({
        ok: true,
        enunciado
    });
}

exports.list_all_enunciados = (req, res) => {
    let desde = Number(req.query.desde) || 0;
    let limite = Number(req.query.limite) || 0;
    enunciado.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, enunciado) => (err) ? errorResp(res) : validRespond(res, enunciado));
};

exports.get_enunciadoByID = (req, res) => {
    enunciado.findOne({ 'seccion': req.params.id }, {}, { sort: { 'fecha': -1 } },
        (err, enunciado) => (err) ? errorResp(res) : validRespond(res, enunciado))
}

exports.create_enunciado = (req, res) => {
    new enunciado(req.body).save(
        (err, enunciado) => (err) ? errorResp(res) : validRespond(res, enunciado)
    );
}

exports.update_enunciado = (req, res) => {
    enunciado.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true },
        (err, enunciado) => (err) ? errorResp(res) : validRespond(res, enunciado)
    )
}
exports.delete_enunciado = (req, res) => {
    enunciado.findByIdAndRemove(req.params.id,
        (err, enunciado) => {
            if (err)
                errorResp(res);
            if (!enunciado)
                errorRespUnq(res);
            validRespond(res, enunciado);
        })
}