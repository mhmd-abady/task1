const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    }
})

const customers = mongoose.model('customers',customerSchema)

module.exports = customers