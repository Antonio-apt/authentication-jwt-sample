"use strict";

const userService = require("../services/UserService");

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
};

module.exports = obj;