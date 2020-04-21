'use strict'

const jwt = require('jsonwebtoken');
const config = {
    jwtSecret: process.env.jwt_secret,
    tokenExpireTime: process.env.token_expire_time
}

const authService = require('../services/AuthService')
//services

const obj = {
    login: (req, res, next) => {
        if(!req.body.user || !req.body.password){
            return res.status(400).send({
                message: "Invalid data"
            })
        }
        authService.authenticate(req).then(
            resp =>{
                res.status(200).send({
                    token: resp
                })
            }
        ).catch(err=>{
                res.status(400).send({
                    message: err.message
                })
        })

    },
}

module.exports = obj