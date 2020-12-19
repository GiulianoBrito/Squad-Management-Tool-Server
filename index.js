var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');
var data = fs.readFileSync('./data.json','utf8');
const PORT = process.env.PORT || 3000

app.use(cors());

app.get('/', function(req, res) {
  res.json(data);
});


app.listen(PORT, () => {
  })
  