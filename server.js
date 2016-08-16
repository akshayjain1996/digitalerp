var express = require('express');
var app = express();
var parser = require('body-parser');
var session = require('express-session');

app.use(express.static('public'));
app.use(parser.json())


require('./routers/router')(app);

var server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server listening at port 5000');
});
