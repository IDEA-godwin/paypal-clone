
var mongoose = require("mongoose");

var mongodb = "mongodb://127.0.0.1:27017/users";

mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
   if(err) {
      console.log("failed connection encountered err: " + err);
   }
});

var db = mongoose.connection;

module.exports = db;