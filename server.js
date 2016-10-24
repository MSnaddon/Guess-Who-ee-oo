const express = require('express');
const app = express();
const path = require('path')

const whoApi = require('./apis/whoApi')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));


const server = app.listen(3000, function () {

  whoApi(app);

  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
