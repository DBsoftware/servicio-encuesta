const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let userSchema = new Schema({
    user: {
        type: String,
        unique: true,
        required: [true, 'Estos campos son necesarios']
    },
    pass: {
        type: String,
        required: [true, 'Estos campos son necesarios']
    },
    role: {
        type: String,
        required: [true, 'Estos campos son necesarios']
    },
    fecha: {
        type: Date,
        default: Date.now,
        required: [false, 'Estos campos son necesarios']
    }
});

userSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('User', userSchema);