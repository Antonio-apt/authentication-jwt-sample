'use strict'

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).send({
            message: "Invalide data"
        })
    }
    jwt.verify(token, process.env.jwt_secret, (err, user)=>{
        if(err){
            return res.status(401).send({
                message: "Invalid token"
            })
        }

        req.user = user;
        next();
    })
}