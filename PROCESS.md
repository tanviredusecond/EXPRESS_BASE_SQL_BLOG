we install thae packages 
but we install the bootstrap_official_blog_that_is_downloadable_with the npm 
=>npm install startbootstrap-clean-blog
we have to install the express framework
=>npm install express
we need the server reload when change in happend thats nodemon
=>npm install nodemon
we made the primary file 
=>touch index.js
we made a public directory
=>mkdir public
we put every static file in the public directory and show the path
and show the expres.static('public') by this
only the css and js go to the public directory
all the pages are in the pages directory
=>mkdir pages
=>cd pages
we will show the pages link again with send file with __dirname
now in the node modules we have the startbootstrap file we 
make a theme directory and we copy everythig inside this 
now we select the css and js file to the public directory
=> nodejs-blog-tutorial $cp -r theme/vendor public/vendor
=> nodejs-blog-tutorial $cp -r theme/css public/css
=> nodejs-blog-tutorial $cp -r theme/img public/img
=> nodejs-blog-tutorial $cp -r theme/js public/js
=> nodejs-blog-tutorial $cp -r theme/index.html pages/index.html


// we send the vendor 
// we send the css
// we send the img
// we send the js 

to the public directory
and send the theme/index/to the pages/index.html
and all the other about and the all the html


and for each html we make a get route other wise it wont work


we are uing the edge tempalting engine 
we install packages
it gives you the python-jinja like functionality


now we are not using the .html we use the .edge
so we make the directory views set the views directory path and keep all the edges file 
under it and we rename all our html into .edge and when we render
remember render function always search for thr view directory
// so we make the view directory
[REMEMBER THE RENDER ALWAYS SEARCH FOR THE views DIRECTORY]

like the python jinja we use the layout file and extend it

