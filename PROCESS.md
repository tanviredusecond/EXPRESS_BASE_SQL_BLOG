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

its just like the python junja

just jeta base layout sekhane
@!section('content')

likhte hobe cause ekhanei change hobe
and je jay gay change hobe sekhane

{% extends 'layouts.app' %}
er bodole
@layoyt('layouts.app')
and 
    {% block content %}
    {% endblock %}

er poriborte
    @section('content')
    @endsection
hobe

so index complete 
make all the rest like post and about and contact
now after making the route add in the layout navbar
now every route is complete 
now this is the database time
we make a folder database and then put the schema
for post we need the mongoose packages

after the Post.js layout
we add the form for entering the data
 we create a create post page and 
 and then add the routeto the index.js

 when you add the nested URL like

 /post/new  you will see that the css does not working

 // solve this problem by adding '/' before css url in the layout.app.edge file
 like 
 <link href="css/clean-blog.min.css" rel="stylesheet">
to

 <link href="/css/clean-blog.min.css" rel="stylesheet">

this will solve the problem

now we create a form for the post data and we post
it to the url /posts/store 
and for handling ht e post request fetch data
we import the body-parser and for storing data in the mongodb we need mongoose and a post route in the index.js

after in the saving the post in the mongodatabase
we need to view the data into the front pages


we change the '/' root and we render the data
with the index

and we render it with a for loop

insted of {% for post in posts%}

            {% endfor %}

@each(post in posts)
    {{post.title}}

@endeach


now we need to display each blog 
so we modify out previous post with post/:id
and now we need our dishplay that when the link is created it will
send the id number just like a get request
and for clickable link we need to link with the id
in the index
we need to change the href like that
<a href="/post/{{post._id}}">

so we get the get request now
we need to show in the post pages
just like the php get reqest handling


now we need to change the post.js and ad username field
and the created_at attribute

now we need a username field in the create_post
and the date will be automatically added

then we need to modify the index.edge to show the username

and adding the information in the post/:id too to make it preety 