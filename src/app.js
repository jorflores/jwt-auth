const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('src/public'));

app.use(require('./controllers/authController'));

module.exports = app;