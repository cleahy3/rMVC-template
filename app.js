// requiring the express module
var express = require('express');
var ejs = require('ejs');
var layouts= require('express-ejs-layouts');
// requiring the routes files
var routes = require('./config/routes');
//constructing express
var app = express();
//sets the view engine for use with res.render
app.set('view engine', 'ejs');
//uses the layouts modules
app.use(layouts);
// uses the express module
app.use(routes);

//routes go between requirements and listen
app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});