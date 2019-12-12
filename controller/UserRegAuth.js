// this will be a complete new app
// like adding a new app wih with the blog app
// so we need to add everything
// add everything thats need for an app
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');


var authapp = express.Router()
authapp.use(bodyParser.json());
authapp.use(bodyParser.urlencoded({ extended: true }));


// all the method goes here

authapp.get('/signup',(req,res)=>{
    //res.render('registration');
    console.log("working");
})

authapp.post('/signup/post',(req,res,next)=>{
    console.log("Route working");
})


authapp.get('/login',(req,res)=>{
    console.log("Route working");
})

authapp.post('/login/post',(req,res)=>{
    console.log("routing working");
})



module.exports = authapp;