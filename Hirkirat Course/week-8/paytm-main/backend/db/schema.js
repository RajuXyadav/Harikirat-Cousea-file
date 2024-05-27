
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://raju_yadav:772001%40Rr@cluster0.4jjfqjm.mongodb.net/paytm-app")

const Userschema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    password:String,
    userName:String
})

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type:Number,
        required: true
    }
});

const Account = mongoose.model('Account',accountSchema);


const User =  mongoose.model('User',Userschema)


module.exports ={
    User,
    Account
}