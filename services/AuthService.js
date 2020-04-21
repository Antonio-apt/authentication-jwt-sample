'use strict'

const jwt = require('jsonwebtoken');


exports.authenticate = async data =>{
    try{
        const token = jwt.sign({user: 1}, process.env.jwt_secret) 
        return await Promise.resolve(token);
    }
    catch(err){
        throw new Error(err)
    }
}