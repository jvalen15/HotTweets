var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var tweetDb = require('../utility/tweetDB');

var urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/', function(req,res){
    var tweets = tweetDb.getTweets();
    //console.log(tweets);
    var today = new Date();
    var dd = today.getDate();
    //console.log(dd);
    //var mm = today.getMonth()+1;
    //var yyyy = today.getFullYear();
    tweets.sort((a,b) => (a.favorite_count < b.favorite_count) ? 1 : -1);
    res.render('index',{tweets:tweets, ageVerified:req.session.ageVerified});
});
router.get('/verifyAge', function(req,res){
    console.log("submitted");
    req.session.ageVerified = true;
    res.redirect("back");
});
router.get('/day', function(req,res){
    var tweets = tweetDb.getTweets();
    var todayTweets = [];
    var today = new Date().getDate();
    for(var i = 0; i < tweets.length; i++){
        if(tweets[i].publish_date.getDate() == today){
            todayTweets.push(tweets[i]);
        }
    }
    todayTweets.sort((a,b) => (a.favorite_count < b.favorite_count) ? 1 : -1);
    res.render('index',{tweets:todayTweets, ageVerified:req.session.ageVerified});
});
// router.get('/week', function(req,res){
//     var tweets = tweetDb.getTweets();
//     var weekTweets = [];
//     var thisWeek = new Date().getDate();
//     console.log(today);
//     for(var i = 0; i < tweets.length; i++){
//         console.log(tweets[i].publish_date.getDate());
//         if(tweets[i].publish_date.getDate() == today){
//             todayTweets.push(tweets[i]);
//         }
//     }
//     res.render('index',{tweets:weekTweets});
// });
router.get('/month', function(req,res){
    var tweets = tweetDb.getTweets();
    var monthTweets = [];
    var thisMonth = new Date().getMonth();
    for(var i = 0; i < tweets.length; i++){
        if(tweets[i].publish_date.getMonth() == thisMonth){
            monthTweets.push(tweets[i]);
        }
    }
    monthTweets.sort((a,b) => (a.favorite_count < b.favorite_count) ? 1 : -1);
    res.render('index',{tweets:monthTweets, ageVerified:req.session.ageVerified});
});
router.get('/year', function(req,res){
    var tweets = tweetDb.getTweets();
    var yearTweets = [];
    var thisYear = new Date().getFullYear();
    for(var i = 0; i < tweets.length; i++){
        if(tweets[i].publish_date.getFullYear() == thisYear){
            yearTweets.push(tweets[i]);
        }
    }
    //yearTweets.sort(function(a.favorite_count, b.favorite_count){return b - a});
    yearTweets.sort((a,b) => (a.favorite_count < b.favorite_count) ? 1 : -1);
    res.render('index',{tweets:yearTweets, ageVerified:req.session.ageVerified});
});
router.get('/allTime', function(req,res){
    var tweets = tweetDb.getTweets();
    
    tweets.sort((a,b) => (a.favorite_count < b.favorite_count) ? 1 : -1);
    res.render('index',{tweets:tweets, ageVerified:req.session.ageVerified});
});

module.exports = router;