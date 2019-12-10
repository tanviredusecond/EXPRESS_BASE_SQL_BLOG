//this controller will fetch all the post
// you have to consider ths as a separate app
// so you have to import everything
const Post = require('../database/models/Post')

module.exports = async (req,res)=>{
    // this is will be fetched with the url
    const post = await Post.findById(req.params.id);
    res.render('post',{post});
}