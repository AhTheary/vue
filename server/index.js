const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
var cookieParser = require('cookie-parser')


app.use(cookieParser())

//allow api to access any port
app.use(cors({
    origin: 'http://54.145.33.67:3000',
    credentials: true,
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//router
const router = require('./routes');
app.use(router);

//mongodb connected
require('./configs/db')();

app.listen(3001, () => {
    console.log("The server: http://54.145.33.67:3001");
})
