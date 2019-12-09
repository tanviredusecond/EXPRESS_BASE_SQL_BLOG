// import the express framework
const express = require('express');

// start the app
const app = new express();

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

app.get('/post',(req,res)=>{
    res.render('post');
})

app.get('/about',(req,res)=>{
    res.render('about');
})







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
