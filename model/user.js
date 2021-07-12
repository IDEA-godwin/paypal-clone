
var mongoose = require('mongoose');
var { Schema } = mongoose;

var userSchema = new Schema({
   name: String,
   email: String,
   password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User