//
const path = require('path')
const Post = require('../database/models/Post')



module.exports = (req,res)=>{
    Post.create(req.body,(err,post)=>{
        console.log('post inserted');
        res.redirect('/')
    })

}