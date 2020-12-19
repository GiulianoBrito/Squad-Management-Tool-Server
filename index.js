var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');
var data = fs.readFileSync('./data.json','utf8');

app.use(cors());


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.json(data);
});


app.listen(3000, () => {
  })
  