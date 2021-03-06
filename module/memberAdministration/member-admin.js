/**
 * Created by samhv on 11/28/16.
 */
'use strict'

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var db = require('./model/db');

app.set('views', __dirname + '/view')
app.set('view engine', 'jade')
app.use('/static/', express.static(__dirname + '/view/public'))

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var port = process.env.PORT || 8000;        // set our port

// add Restful Controller
app.use('/api/', require('./controller/UsersRestController'));
app.use('/', require('./controller/ViewsController'));
app.use('/', require('./controller/AuthController'));

// start
app.listen(port);
console.log('Member Administration on port ' + port);
