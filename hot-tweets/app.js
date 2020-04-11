var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

let navigationController = require('./controller/navigationController');
//let sessionController = require('./controller/sessionController');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');

app.use(session({secret: 'something'}));

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
