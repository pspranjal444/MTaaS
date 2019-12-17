const mongoose = require('mongoose');

const BugSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    summary: String,
    test_id: String,
    project_id: String,
    tester_id: String,
    reproduce_steps: String,
    actual_results: String,
    expected_results: String,
    bug_type: String,
    bug_severity: String,
    date: Date 
})

module.exports = mongoose.model('BugSchema', BugSchema);