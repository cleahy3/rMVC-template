// requiring the express module
var express = require('express');
// requiring the routes files
var routes = require('./config/routes');
//constructing express
var app = express();

app.use(routes);

//routes go between requirements and listen
app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});