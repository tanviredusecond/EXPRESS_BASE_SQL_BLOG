// for the post we define the
// post schema
const mongoose = require('mongoose')

// now create the schema
const PostSchema = new mongoose.Schema({

    title:String,
    description:String,
    content:String
});

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;