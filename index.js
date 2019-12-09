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
const expressEdge = require('express-edge');

// we send the index file and the __dirname is he current directory

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'));
});


app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'));
});



app.get('/post',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'));
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'));
});



app.listen(3000,()=>{
    console.log("App listen on port 3000");
})
