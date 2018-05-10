const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let encuestaSchema = new Schema({
    cedula: {
        type: String,
        unique: true,
        required: [true, 'Estos campos son necesarios']
    },
    p1: {
        type: Array,
        required: [true, 'Estos campos son necesarios']
    }
});

encuestaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Encuesta', encuestaSchema);