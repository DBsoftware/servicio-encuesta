require('./config/config');

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.use(require('./routes/encuesta'));

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base datos online');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${process.env.PORT}`);
})