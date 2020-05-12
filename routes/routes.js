"use strict";

const express = require("express");
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

//controller
const UserController = require("../controllers/UserController");

router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "api running",
  });
});

router.post("/register", UserController.register);
router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An Error occurred')
        return next(error);
      }
      req.login(user, {
        session: false
      }, async (error) => {
        if (error) return next(error)
        const body = {
          _id: user._id,
          email: user.email
        };
        const token = jwt.sign({
          user: body
        }, 'top_secret');
        return res.json({
          token
        });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post('/profile', (req, res, next) => {
  passport.authenticate('jwt', {
    session: false
  }, (err, user, info) => {
    if (err) {
      res.json({
        message: err
      })
    }
    if (info != undefined) {
      res.json({
        message: info
      })
    }
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    })
  })(req, res, next);
});


router.use((err, _req, res, _next) => {
  console.error(err);
  return res.json({
    message: "Error",
    error: err,
  });
});

module.exports = router;