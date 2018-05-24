const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let enunciadoSchema = new Schema({
    seccion: {
        type: String,
        required: false,
        default: null
    },
    preguntas: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    }
});

module.exports = mongoose.model('Enunciado', enunciadoSchema);