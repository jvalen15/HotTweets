var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
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
