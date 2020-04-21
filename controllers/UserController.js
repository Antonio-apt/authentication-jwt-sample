'use strict'

//services


const obj = {
    register: (req, res, next) => {
        if(!req.body){
            return res.status(400).send({
                message: 'Invalid data'
            })
        }
        
    },
}

module.exports = obj;