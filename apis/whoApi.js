const whoData = require('./Data/jsonData')

var whoApi = function(app){
  app.get('/api/whoGuess', function (req, res) {
    res.json(whoData)
  });
}

module.exports = whoApi;

