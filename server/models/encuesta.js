const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let encuestaSchema = new Schema({
    cedula: {
        type: String,
        required: [true, 'Estos campos son necesarios']
    },
    s1: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s2: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s3: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s4: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s5: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s6: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s7: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s8: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s9: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s10: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s11: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s12: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    s13: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    },
    fecha: {
        type: Date,
        default: Date.now,
        required: [false, 'Estos campos son necesarios']
    }
});


module.exports = mongoose.model('Encuesta', encuestaSchema);