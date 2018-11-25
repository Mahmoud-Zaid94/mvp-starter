

var express = require('express');

var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo');
 var db = require('../database-mongo/index.js');


var app = express();


app.use(bodyParser.urlencoded({ extended: false }))
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/items' , function (req,res){
db.save(req.body , function(test){
	console.log(test)
  res.send(req.body)
})

})

var port = process.env.PORT || 3000
app.listen(port, function() {
 console.log(`listening on port ${port}`);
});

