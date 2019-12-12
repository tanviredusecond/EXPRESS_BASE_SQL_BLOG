// this is a strategy about how this 
// passport authenticate
//this strategy will be loaded in the passport module and 
// thats how its going to work

var passport = require('passport');
var localStrategy = require('passport-local').Strategy
//we need the databas of course
var User = require('../../database/models/User');


//let the user use the passport strategy
passport.use(new localStrategy(User.authenticate()));

// now passport will use the mongoose authentication


// this is for session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());