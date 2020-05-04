var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
var Twitter = require('twitter');
let navigationController = require('./controller/navigationController');
//let sessionController = require('./controller/sessionController');

//
passport.use(new Strategy({
    consumerKey : 'Mc3zVkWyMBmVMzPncjqj5lVSW',
    consumerSecret:'3nyl4RNtbpwiGl0RjbaKlgfWv2o2HjU0TBKZy5ZFgZ2tkc7HYk',
    callbackURL:'http://localhost:8080/return/twitter'
}, function(token, tokenSecret, profile, callback){
    return callback(null, profile);
}
));
passport.serializeUser(function(user, callback) {
    callback(null, user);
});

passport.deserializeUser(function(obj, callback) {
    callback(null, obj);
});
//

var client = new Twitter({
    consumer_key:         'Mc3zVkWyMBmVMzPncjqj5lVSW',
    consumer_secret:      '3nyl4RNtbpwiGl0RjbaKlgfWv2o2HjU0TBKZy5ZFgZ2tkc7HYk',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAACXSCAEAAAAA1IYmWYKE4w6zltZgOiKlWY7Dgks%3Df7DNuXPTivWw9CrIKI3nAipSAeMzVeenCvQSa7oyFd13dIvUr0'
  });

client.get('statuses/lookup', {id: "1255542797765013504"} , function(err,data,res) {
    if(err){
        return console.error(err);
    }
    if(!err){
        console.log(data[0].text);
        //console.log(res);
    }
})

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret: 'whatever', resave: true, saveUninitialized: true}))

//app.use(session({secret: 'something'}));

//app.use('/session', sessionController);
var ageVerified = false;
app.use('/*',function(req,res,next){
    // if(req.session.ageVerified){

    // }
    // else{

    // }
    next();
});

app.use('/', navigationController);


app.listen(8080);
