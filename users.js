var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;
MongoClient.connect(url, function(err, database) {
if (err) throw err;
db = database;
console.log("Connected to " + url);
});


function getAll(req,res){
    
    db.collection("users").find({})
    .toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
    console.log(result);
    });
}

function getByfname(req,res){
    var para = req.param('fname');
    var query = { fname: para};
    db.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
}

function getByrole(req,res){
    var role = req.params.role;
    var query = { role: role};
    db.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
}

module.exports = {
    getAll: getAll,
    getByfname: getByfname,
    getByrole: getByrole
    };