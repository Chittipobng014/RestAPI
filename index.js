const express = require('express');
const router = express.Router();
const app =express();
const assert = require("assert");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var users = require('./users.js');

app.get('/users', users.getAll);
app.get('/users/search', users.getByfname);
app.get('/users/role/:role', users.getByrole)





// app.get('/users', function(req, res) { 
    
    //     MongoClient.connect(url, function(err, db) {
    //         if (err) throw err;
    //         db.collection("users").find({}).toArray(function(err, result) {
    //           if (err) throw err;
    //           console.log(result);
    //           res.send(result);
    //           db.close();
    //         });
    //       });
//  });


// app.get('/users/search', function(req, res) { 
    //     var para = req.param('fname');
    //     MongoClient.connect(url, function(err, db) {
    //         if (err) throw err;
    //         var query = { fname: para};
    //         db.collection("users").find(query).toArray(function(err, result) {
    //           if (err) throw err;
    //           console.log(result);
    //           res.send(result);
    //           db.close();
    //         });
    //       });
       
//  });

// app.get('/users/role/:role', function(req, res) {
    //       var role = req.params.role;
    //       MongoClient.connect(url, function(err, db) {
    //         if (err) throw err;
    //         var query = { role: role};
    //         db.collection("users").find(query).toArray(function(err, result) {
    //           if (err) throw err;
    //           console.log(result);
    //           res.send(result);
    //           db.close();
    //         });
    //       });
    //  ; 
// });

app.listen(27017,function(){
console.log("Ready");
});