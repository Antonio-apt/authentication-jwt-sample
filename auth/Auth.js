"use strict";

const passport = require("passport");
const bcrypt = require('bcrypt');
const localStrategy = require("passport-local").Strategy;
const {
    User
} = require('../models');
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
    "login",
    new localStrategy({
            usernameField: "email",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await User.findOne({
                    where: {
                        email
                    },
                });
                if (!user) {
                    return done(null, false, {
                        message: "User not found",
                    });
                }
                const validate = await bcrypt.compare(password, user.password);
                if (!validate) {
                    return done(null, false, {
                        message: "Wrong Password",
                    });
                }
                return done(null, user, {
                    message: "Logged in Successfully",
                });
            } catch (error) {
                return done(error);
            }
        }
    )
);

const opts = {
    secretOrKey: process.env.jwt_secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
}

passport.use(
    'jwt',
    new JWTstrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload)
        try {
            User.findOne({
                where: {
                    email: jwt_payload.user.email
                },
            }).then(user => {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
        } catch (err) {
            done(err)
        }
    })
)