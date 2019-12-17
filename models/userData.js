const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    password: String,
    role: String,
    skills: String,
    projectid:String,
    projects: String,
    resume: String,
    user_id: String,
    lat: Number,
    lon: Number
})

module.exports=mongoose.model('userData',userSchema);