(function() {
    'use strict';

    var express = require('express');
    var path = require('path');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');

    var routes = require('./routes/index');

    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');


    app.use(express.static(path.join(__dirname, '../client')));


    app.use('/', routes);

    var server = app.listen(3000, function() {
        console.log("The big test......")
        console.log('Express server listening on port ' + server.address().port);
    });

    module.exports = app;
}());
