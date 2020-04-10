var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var tweetDb = require('../utility/tweetDB');

var urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/', function(req,res){
    var tweets = tweetDb.getTweets();
    console.log(tweets);
    console.log(req.path);
    res.render('index',{tweets:tweets});
});
router.get('/day', function(req,res){

});
module.exports = router;