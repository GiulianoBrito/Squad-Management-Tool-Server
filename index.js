var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');
var data = fs.readFileSync('./data.json','utf8');
const PORT = process.env.PORT || 5000

app.use(cors());


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.json(data);
});


app.listen(PORT, () => {
  })
  