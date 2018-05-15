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
    fecha: {
        type: Date,
        default: Date.now,
        required: [false, 'Estos campos son necesarios']
    }
});

//encuestaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Encuesta', encuestaSchema);