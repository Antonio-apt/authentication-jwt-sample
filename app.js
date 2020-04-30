"use strict";

const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const result = dotenv.config();
const compression = require("compression");

require("./middlewares/AuthMiddleware");

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

const routes = require("./routes/routes");
const secureRoutes = require('./routes/secure-routes')
app.use("/", routes);
app.use("/user", passport.authenticate('jwt', {
    session: false
}, secureRoutes))

const port = process.env.PORT || 3000;
app.set("port", port);

app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`);
});

module.exports = app;