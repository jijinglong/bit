const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

let app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found URL: ' + req.url);
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.end();
});

module.exports = app;
