

var mongoose = require('mongoose');
var { Schema } = mongoose;

var walletSchema = new Schema({
    _wallet_id: {
        type: String,
    },
    amountHeld: {
        type: String,
        default: '0'
    }
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;