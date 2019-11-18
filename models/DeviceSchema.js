const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    project_id: String,
    tester_id: String,
    device_name: String,
    ram: String,
    processor: String,
    status: Boolean  
})

module.exports = mongoose.model('DeviceSchema', DeviceSchema);