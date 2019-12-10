const mongoose = require('mongoose');

const Messages = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    msg: String  
})

module.exports = mongoose.model('Messages', Messages);