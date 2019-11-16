const mongoose = require('mongoose');

const ScriptsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    script_name: String,
    tester_id: String,
    project_id: String,
    file_name: String,
    file_location: String,
})

module.exports = mongoose.model('ScriptsSchema', ScriptsSchema);