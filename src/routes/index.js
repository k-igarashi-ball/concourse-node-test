const express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.status(200).json({
        name: 'tobi'
    });
});

module.exports = app;
