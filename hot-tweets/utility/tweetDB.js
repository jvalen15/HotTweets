var Tweet = require('../model/Tweet');
module.exports.getTweets = function (){
    // let tweets = [];
    // for(let i = 0; i < tweetDb.length; i++){
    //     let item = new Tweet(
    //         tweetDb[i].author,
    //         tweetDb[i].contents,
    //         tweetDb[i].picture,
    //         tweetDb[i].favorite_count
    //     );
    //     tweets.push(item);
    // }
    return tweets;
};
var tweets = [{
    author: "Brian Stone",
    description: "this is a tweet",
    picture: "",
    publish_date:"4/10/20",
    favorite_count:5
},
{
    author: "Brian Stone",
    description: "this is a tweet",
    picture: "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg",
    publish_date:"4/09/20",
    favorite_count:5
},
{
    author: "Barack Obama",
    description: "It’s World Health Day, and we owe a profound debt of gratitude to all our medical professionals. They’re still giving their all for us every day, at great risk to themselves, and we can’t thank them enough for their bravery and their service.",
    picture:"",
    publish_date:"04/07/20",
    favorite_count:583800
}];