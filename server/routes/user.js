const express = require('express')
const User = require('../models/user')
const app = express()
var userCtrllr = require('../controllers/user');
app.get('/user', userCtrllr.list_all_users);
app.get('/user/:id', userCtrllr.get_userByID);
app.post('/user', userCtrllr.create_user);
app.put('/user/:id', userCtrllr.update_user);
app.delete('/user/:id', userCtrllr.delete_user);

module.exports = app;