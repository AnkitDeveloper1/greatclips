const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
require("./db/database")();

const app = express();

const auth = require("./routes/auth");
const users = require("./routes/users");
const saloons = require("./routes/saloons");
const settings = require("./routes/settings");
const attend = require("./routes/attend");
const admins = require("./routes/admins");
const usstates = require("./routes/usstates");

app.use(fileupload());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.options("*", cors({ origin: ['http://localhost:3001', 'http://localhost:3000'], optionsSuccessStatus: 200 }));

app.use(cors({ origin: ['http://localhost:3001', 'http://localhost:3000'], optionsSuccessStatus: 200 }));

app.use('/api/auth', auth);
app.use('/api/user', users);
app.use('/api/saloons', saloons);
app.use('/api/settings', settings);
app.use('/api/attend', attend);
app.use('/api/admins', admins);
app.use('/api/usstates', usstates);

// Created the server
const server = app.listen(8080)

module.exports = server;
