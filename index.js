// import the express framework
const express = require('express');

// importing the mongoose database driver
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// impoer the database schema
const Post = require('./database/models/Post');

// start the app
const app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// here we connect with the mongoose database
url = "mongodb://localhost:27017/node_blog";
const connect = mongoose.connect(url);
connect.then((db)=>{
    console.log("connected to database");
});








// show the static directory it will load everything
// only the stsatic css js not the pages
app.use(express.static('public'));

// we show the path for the index page with the root
// we need the module path for that

const path = require('path');

// import the express edges for the edge engine
// to use the express edges we have to import with the config
const { config, engine } = require('express-edge');
// setting the path for rendering
app.use(engine);
app.set('views',__dirname+'/views');

// we send the index file and the __dirname is he current directory


// changing this html and replacing with the views/index
//app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,'pages/index.html'));
//});

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.get('/post/new',(req,res)=>{
    res.render('create');
})

app.get('/post',(req,res)=>{
    res.render('post');
})



app.get('/about',(req,res)=>{
    res.render('about');
})


// adding the post request for the post

app.post('/post/store',(req,res)=>{
    //not storing anything yet
    //console.log(req.body);
    Post.create(req.body,(err,post)=>{
        console.log("data inserted ");
        res.redirect('/')
    })
    //store in the database
});







//app.get('/about',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,'pages/about.html'));
//});



app.get('/post',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'));
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'));
});



app.listen(3000,()=>{
    console.log("App listen on port 3000");
})
