"use strict";

const express = require("express");
const dotenv = require("dotenv");
const result = dotenv.config();
const passport = require("passport");
const bodyParser = require("body-parser");
const compression = require("compression");

require("./auth/Auth");

const app = express();
app.use(compression());

if (result.error) {
    throw result.error;
}

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(passport.initialize());

const routes = require("./routes/routes");
app.use("/", routes);

const port = process.env.PORT || 3000;
app.set("port", port);

app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`);
});

module.exports = app;