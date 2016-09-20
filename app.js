// requiring the express module
var express = require('express');
var ejs = require('ejs');
// requiring the routes files
var routes = require('./config/routes');
//constructing express
var app = express();
app.set('view engine', 'ejs')
app.use(routes);

//routes go between requirements and listen
app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});