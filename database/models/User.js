// create daatabase schema for User
// with passport and passport-local-mongoose
// that will give use the power of authentication
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var User = Schema({
    admin:{
        type:String,
        default:false
    }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',User);


// this is the model 
// we need to specfy the strategy that the passport is following
// we make a middleware name authentiate
// it will be a simple passport-local-mongoose authentication
// add the authenticate file and the router