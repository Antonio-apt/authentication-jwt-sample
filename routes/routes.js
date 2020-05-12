"use strict";

const express = require("express");
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

//controller
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController")

router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "api running",
  });
});

router.post("/register", UserController.register);
router.post('/login', AuthController.login);
//secure
router.post('/profile', UserController.profile);


router.use((err, _req, res, _next) => {
  console.error(err);
  return res.json({
    message: "Error",
    error: err,
  });
});

module.exports = router;