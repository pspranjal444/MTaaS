const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tester_id: String,
    tester_name: String,
    project_id: String,
    notification: String,
    date: Date
})

module.exports = mongoose.model('NotificationSchema', NotificationSchema);