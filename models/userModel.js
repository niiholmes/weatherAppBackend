const mongoose =require('mongoose')

const Schema =mongoose.Schema

const userSchema = new Schema({
    username: {type:String, unique:true, minlength:6, maxlength:15},
    password: {type:String, minlength:8},
    email: {type:String, unique:true}
})

const User = mongoose.model('users', userSchema)
module.exports = User  