var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about', {qs: req.query});
});

app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
});

app.listen(3000);
