
var mongoose = require('mongoose');
var { Schema } = mongoose;

var walletSchema = require('./wallet')

var userSchema = new Schema({
   name: {
      type: String,
      require: true
   },
   email: {
      type: String,
      require: true
   },
   password: {
      type: String,
      require: true
   },
   wallet: walletSchema
});

const User = mongoose.model('User', userSchema);

module.exports = User