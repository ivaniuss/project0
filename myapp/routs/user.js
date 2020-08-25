const express = require('express');
const {createUser} = require('../controllers/users.js');
const routes = express.Router();

routes.post('/newUser', createUser);

module.exports = routes;