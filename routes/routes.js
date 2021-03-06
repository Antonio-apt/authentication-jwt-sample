"use strict";

const express = require("express");
const router = express.Router();

//controller
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");

//middlewares

router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "api running",
  });
});

router.post("/register", UserController.register);
router.post("/login", AuthController.login);

//secure
router.get("/profile", UserController.profile);

router.use((err, _req, res, _next) => {
  console.error(err);
  return res.json({
    message: "Error",
    error: err,
  });
});

module.exports = router;
