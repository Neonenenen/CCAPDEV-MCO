//Install Command:
//npm init
//npm i express express-handlebars body-parser mongodb mongoose
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));

const handlebars = require('express-handlebars');
server.set('view engine', 'hbs');
server.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

server.use(express.static('public'));

const { MongoClient } = require('mongodb');
const databaseURL = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(databaseURL);


const databaseName = "EspressoSelf";
const collection1 = "cafe";
const collection2 = "review";
const collection3 = "user";

//i dont know if we'll use mongoose right now, uncomment if needed

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/EspressoSelf');

function errorFn(err){
    console.log('Error found. Check connection.');
}

function errorFunc(err){
    console.log('Error spotted. Collection making failed.')
}

function successFn(res){
    console.log('Database query successful!');
}
 
mongoClient.connect().then(function(con){
    console.log("Attempt to create!");
    const dbo = mongoClient.db(databaseName);
    //Will create a collection if it has not yet been made
    dbo.createCollection(collection1)
      .then(successFn).catch(errorFn);

    dbo.createCollection(collection2)
      .then(successFn).catch(errorFn);

    dbo.createCollection(collection3)
      .then(successFn).catch(errorFn);
  }).catch(errorFn);


//uncomment if needs to be used, mongoose isnt a hard requirement so i dont know if we'll use it right now

// const acctSchema = new mongoose.Schema({
//     username: { type: String },
//     email: { type: String },
//     password: { type: String }
//   }, { versionKey: false });
  
// const acctModel = mongoose.model('acct', acctSchema);

// const cafeSchema = new mongoose.Schema({
//     cafe_name: { type: String },
//     cafe_desc: { type: String },
//     cafe_owner: { type: String},
//     cafe_items: { type: Array, "default": []},
//     cafe_rating: {type: Number}
// }, { versionKey: false });

// const cafeModel = mongoose.model('cafe', cafeSchema);

// const reviewSchema = new mongoose.Schema({
//     username: { type: String},
//     rating: { type: Number},
//     comment: { type: String},
    

// }, { versionKey: false });

// const reviewModel = mongoose.model('review', revSchema);

server.get('/', function(req, resp){
/*
TODO fill this up, .find, .lean, .then, resp.render
refer to social media 4 (?)
*/ 
});

/*TODO: server.post, for each page(?) and login functionality, refer to i think 11 MongoDB file from NodeJS file samples for reference*/

function finalClose(){
    console.log('Close connection at the end!');
    mongoose.connection.close();
    process.exit();
}

const port = process.env.PORT | 3000;
server.listen(port, function(){
    console.log('Listening at port ' +port);
})

