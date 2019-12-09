module.exports = (req,res,next)=>{
    if(!req.body.username || !req.body.title || ! req.body.descrition){
        return res.redirect('/post/new')   
    }else{
        next();
    }
}