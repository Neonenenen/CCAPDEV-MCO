/*
const { MongoClient } = require('mongodb');
const databaseURL = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(databaseURL);
*/

//const databaseName = "EspressoSelf";
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/EspressoSelf');

function errorFn(err){
    console.log('Error found. Check connection.');
}

function errorFunc(err){
    console.log('Error spotted. Collection making failed.')
}
// function successFn(res){
//     console.log('Database query successful!');
// }
 
/*mongoClient.connect().then(function(con){
    console.log("Attempt to create!");
    const dbo = mongoClient.db(databaseName);
}).catch(errorFn);*/




const acctSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String }
  }, { versionKey: false });
  
const acctModel = mongoose.model('acct', acctSchema);

const cafeSchema = new mongoose.Schema({
    cafe_name: { type: String },
    cafe_desc: { type: String },
    cafe_owner: { type: String},
    cafe_items: { type: Array, "default": []},
    cafe_rating: {type: Number}
}, { versionKey: false });

const cafeModel = mongoose.model('cafe', cafeSchema);

const reviewSchema = new mongoose.Schema({
    username: { type: String},
    rating: { type: Number},
    comment: { type: String},
    

}, { versionKey: false });

const reviewModel = mongoose.model('review', revSchema);

server.get('/', function(req, resp){
/*
TODO fill this up, .find, .lean, .then, resp.render
refer to social media 4 (?)
*/ 
});

/*TODO: server.post, including navigating from one page to another */
function finalClose(){
    console.log('Close connection at the end!');
    mongoose.connection.close();
    process.exit();
}

const port = process.env.PORT | 3000;
server.listen(port, function(){
    console.log('Listening at port ' +port);
})

