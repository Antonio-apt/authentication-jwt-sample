'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const result = dotenv.config();
const compression = require('compression');

const app = express();
app.use(compression());

if (result.error) {
    throw result.error;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

const index = require("./routes/index");
app.use('/', index);

const port = process.env.PORT || 3000;
app.set('port', port);

app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`)
})

module.exports = app;