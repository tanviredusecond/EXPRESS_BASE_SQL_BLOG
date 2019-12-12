// import the express framework
const express = require('express');

// importing the mongoose database driver
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
var authenticate = require('./middleware/passport_strategy/authenticate');
// impoer the database schema
const Post = require('./database/models/Post');

// start the app
const app = new express();

// for the login check this have to be used
app.use(passport.initialize());
const storePost = require('./middleware/storePost');
const createPostController = require('./controller/createPost');
const getPostController = require('./controller/getPost');
const homePageController = require('./controller/homePage');
const storePostController = require('./controller/storePost');

// this is a separate
const UserRouter = require('./controller/UserRegPost');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// here we connect with the mongoose database

url = "mongodb+srv://tanvir:1122@cluster0-cjrha.mongodb.net/node_blog";
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


app.use('/users',UserRouter);
/// adding all the controller
app.get('/',homePageController);
app.get('/post/new',createPostController);
app.get('/post/:id',getPostController);
app.post('/post/store',storePostController);








// // changing it to comntroller
// app.get('/',async (req,res)=>{
    
//     //res.render('index');
//     //we change the url to show the dynaminc data for the 
//     // of the post
//     // we use async function so it will first fetch all the data
//     // fetch all the data
//     const posts = await Post.find({})
//     res.render('index',{posts})

// })

// // not changing convert to controller will be n future
 app.get('/contact',(req,res)=>{
     res.render('contact');
 })


// // change will be in the controller
// app.get('/post/new',(req,res)=>{
//     res.render('create');
// })



// //change it to controller
// //we modify this route to show the single post
// app.get('/post/:id',async (req,res)=>{
//     //fetch the post with the post ID
//     //res.render('post');
//     const post = await Post.findById(req.params.id)
//     //console.log(post);
//     res.render('post',{post})
// })


// // not changing this
 app.get('/about',(req,res)=>{
          res.render('about');
 })


// // adding the post request for the post
// // adding the validation middlwware here


// //chaning to controller
// app.post('/post/store',(req,res)=>{
//     //not storing anything yet
//     //console.log(req.body);
//     Post.create(req.body,(err,post)=>{
//         console.log("data inserted ");
//         res.redirect('/')
//     })
//     //store in the database
// });







// //app.get('/about',(req,res)=>{
// //    res.sendFile(path.resolve(__dirname,'pages/about.html'));
// //});



// app.get('/post',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'pages/post.html'));
// });

// app.get('/contact',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'pages/contact.html'));
// });



app.listen(3000,()=>{
    console.log("App listen on port 3000");
})
