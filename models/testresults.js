const mongoose = require('mongoose')

const resultSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  project_id: String,
  file_name: String,
  tester_id: String,
  test_id: String,
  log_file_name: String,
  log_file_loc: String
})

module.exports = mongoose.model('ResultSchema', resultSchema);
