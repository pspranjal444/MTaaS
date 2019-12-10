const mongoose = require('mongoose');

const BillingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tester_id: String,
    project_id: String,
    manager_id: String,
    amount: Number
})

module.exports = mongoose.model('BillingSchema', BillingSchema);