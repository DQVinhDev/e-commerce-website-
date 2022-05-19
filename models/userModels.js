const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true,
        
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    }
},{
     timeStamps: true
})
module.exports = mongoose.model('Users', userSchema)