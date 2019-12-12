// this will be a complete new app
// like adding a new app wih with the blog app
// so we need to add everything
// add everything thats need for an app
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var User = require('../database/models/User')
var authenticate = require('../middleware/passport_strategy/authenticate')


var authapp = express.Router()
authapp.use(bodyParser.json());
authapp.use(bodyParser.urlencoded({ extended: true }));


// all the method goes here

authapp.get('/signup',(req,res)=>{
    res.render('registration');

    // take you to registration page
})


authapp.post('/signup/post',(req,res,next)=>{
    // we insert the user with the register function
    User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{
        // we take the user object and the passport value for the auth
        /// if there is error
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type','application/json');
            res.json({err:err})
        }else{
            // if there is no problem then use the passport authenticate function
            // to authenticate it
            passport.authenticate('local')(req,res,()=>{
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json({
                    success:true,
                    status:'Registration successfull'
                });
            });
        }


    });
});



authapp.get('/login',(req,res)=>{
    res.render('login');
})

authapp.post('/login/post',passport.authenticate('local'),(req,res)=>{
    req.body.user = req.body.username;
    console.log(req.body.user);
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({
        success:true,
        status:'login successfull'
    });
});


// this is for tesing purpose
authapp.get('/getallusers',async (req,res)=>{
        const users = await User.find({})
        res.json(users);
})


module.exports = authapp;


