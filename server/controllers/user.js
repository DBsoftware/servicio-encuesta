'use strict';


var mongoose = require('mongoose'),
    user = mongoose.model('User');

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
            message: 'usuario no encontrado'
        }
    });
}
const validRespond = (r, user) => {
    r.json({
        ok: true,
        user
    });
}

exports.list_all_users = (req, res) => {
    let desde = Number(req.query.desde) || 0;
    let limite = Number(req.query.limite) || 0;
    user.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, user) => (err) ? errorResp(res) : validRespond(res, user));
};

exports.get_userByID = (req, res) => {
    user.findOne({ 'user': req.params.id }, {}, { sort: { 'fecha': -1 } },
        (err, user) => (err) ? errorResp(res) : validRespond(res, user))
}

exports.create_user = (req, res) => {
    new user(req.body).save(
        (err, user) => (err) ? errorResp(res) : validRespond(res, user)
    );
}

exports.update_user = (req, res) => {
    user.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true },
        (err, user) => (err) ? errorResp(res) : validRespond(res, user)
    )
}
exports.delete_user = (req, res) => {
    user.findByIdAndRemove(req.params.id,
        (err, user) => {
            if (err)
                errorResp(res);
            if (!user)
                errorRespUnq(res);
            validRespond(res, user);
        })
}