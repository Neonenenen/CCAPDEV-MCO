

const express = require('express');
const server = express();

const bodyParser = require('body-parser')
server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));

const handlebars = require('express-handlebars');
server.set('view engine', 'hbs');
server.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

server.use(express.static('public'));


server.get('/', function(req, resp){
    resp.render('body_home_user',{
        layout          : 'index',
        title           : 'Home - Espresso Self!',
    });
});

server.get('/body_home_nouser', function(req, resp){
    resp.render('body_home_nouser',{
        layout          : 'index',
        title           : 'Home - Espresso Self!',
    });
});

server.get('/profile_user', function(req, resp){
    resp.render('profile_user',{
        layout          : 'index',
        title           : 'User 1 - Espresso Self!',
    });
});

server.get('/login', function(req, resp){
    resp.render('login',{
        layout          : 'loginIndex',
        title           : 'Register - Espresso Self!',
    });
});

server.get('/register', function(req, resp){
    resp.render('register',{
        layout          : 'loginIndex',
        title           : 'Register - Espresso Self!',
    });
});

server.get('/add_cafe', function(req, resp){
    resp.render('add_cafe',{
        layout          : 'index',
        title           : 'Add Cafe - Espresso Self!',
    });
});

server.get('/cafe1', function(req, resp){
    resp.render('cafe1',{
        layout          : 'index',
        title           : 'Starbucks - Espresso Self!',
    });
});

server.get('/cafe1_user', function(req, resp){
    resp.render('cafe1_user',{
        layout          : 'index',
        title           : 'Starbucks - Espresso Self!',
    });
});

server.get('/add_review', function(req, resp){
    resp.render('add_review',{
        layout          : 'index',
        title           : 'Create Review - Espresso Self!',
    });
});

server.get('/edit_profile', function(req, resp){
    resp.render('edit_profile',{
        layout          : 'index',
        title           : 'Edit Profile - Espresso Self!',
    });
});

server.get('/profile', function(req, resp){
    resp.render('profile',{
        layout          : 'index',
        title           : 'User 1 - Espresso Self!',
    });
});

const port = process.env.PORT | 9090;
server.listen(port, function(){
    console.log('Listening at port '+port);
});