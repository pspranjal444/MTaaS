const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    project_name: String,
    project_id: String,
    manager_id: String,
    manager_name: String,
    app_link: String,
    app_name: String,
    proj_desc: String,
    app_location: String,
    app_name_loc: String,
    date: Date
})

module.exports = mongoose.model('ProjectSchema', ProjectSchema); 