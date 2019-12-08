const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    project_name: String,
    project_id: String,
    manager_id: String,
    manager_name: String,
    app_link: String,
    app_name: String,
    proj_desc: String,
    app_location: String,
    tester_id: String,
    apply: Boolean,
    result: Boolean 
})

module.exports = mongoose.model('ApplicationSchema', ApplicationSchema);