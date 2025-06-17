const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    age : {
        type: Number,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    }
    
},
{
        timestamps: true
    }
);

const User = mongoose.model('member', userSchema);
module.exports = User;