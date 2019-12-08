const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    password: String,
    role: String,
    skils: String,
    projectid:String,
    projects: String,
    resume: String,
    user_id: String
})

module.exports=mongoose.model('userData',userSchema);