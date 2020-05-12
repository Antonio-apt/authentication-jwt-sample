"use strict";

const userService = require("../services/UserService");
const passport = require('passport');
const jwt = require('jsonwebtoken');

const obj = {
    register: async (req, res, next) => {
        if (!req.body) {
            return res.status(400).send({
                message: "Invalid data",
            });
        }
        console.log(req.body)
        userService
            .register(req.body)
            .then((resp) => {
                res.status(200).send({
                    message: `User ${resp} successfully created`,
                });
            })
            .catch(error => {
                res.status(400).send({
                    message: error,
                });
            });
    },
    profile: (req, res, next) => {
        passport.authenticate('jwt', {
            session: false
        }, (err, user, info) => {
            if (err) {
                res.status(400).send({
                    message: err
                })
            }
            if (info != undefined) {
                res.status(400).send({
                    message: info
                })
            }
            res.json({
                message: 'You made it to the secure route',
                user: req.user,
                token: req.query.secret_token
            })
        })(req, res, next);
    }
};

module.exports = obj;