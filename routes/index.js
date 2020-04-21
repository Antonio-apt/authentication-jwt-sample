'use strict'

const express = require('express');
const router = express.Router();

const RegisterController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');


router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "api running"
    })
});

router.post('/register', RegisterController.register);
router.post('/login', AuthController.login);


router.use((err, _req, res, _next) => {
    console.error(err);
    return res.json({
        message: 'Error',
        error: err
    });
});

module.exports = router;