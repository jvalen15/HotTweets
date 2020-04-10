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
    author: "@BrianStone",
    description: "this is a tweet",
    picture: "",
    publish_date:"4/10/20",
    favorite_count:5
},
{
    author: "@BrianStone",
    description: "this is a tweet",
    picture: "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg",
    publish_date:"4/09/20",
    favorite_count:5
},
{
    //https://twitter.com/BarackObama/status/1247555328365023238
    author: "@BarackObama",
    description: "It’s World Health Day, and we owe a profound debt of gratitude to all our medical professionals. They’re still giving their all for us every day, at great risk to themselves, and we can’t thank them enough for their bravery and their service.",
    picture:"",
    publish_date:"04/07/20",
    favorite_count:583800
},
{
    //https://twitter.com/jorvalentine/status/1043636849108037632
    author: "@jorvalentine",
    description: "alcohol: drank \n homies: hugged \n life: good \n fuck: sea world",
    picture:"",
    publish_date:"09/22/18",
    favorite_count:427
},
{
    //https://twitter.com/gnuman1979/status/1239523796542992387
    //<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Quarantine day 6. <a href="https://t.co/er652Oy3Ki">pic.twitter.com/er652Oy3Ki</a></p>&mdash; jamie (@gnuman1979) <a href="https://twitter.com/gnuman1979/status/1239523796542992387?ref_src=twsrc%5Etfw">March 16, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    author: "@gnuman1979",
    description: "",
    picture:"https://twitter.com/gnuman1979/status/1239523796542992387?ref_src=twsrc%5Etfw",
    publish_date:"03/16/20",
    favorite_count:3000000
},
{
    //https://twitter.com/kobebryant/status/1221276426164269056
    author: "@kobebryant",
    description: "Continuing to move the game forward @KingJames. Much respect my brother 💪🏾 #33644",
    picture:"",
    publish_date:"01/25/20",
    favorite_count:2700000
},
{
    //https://twitter.com/TheEllenShow/status/440322224407314432
    author: "@TheEllenShow",
    description: "If only Bradley's arm was longer. Best photo ever. #oscars",
    picture:"https://pbs.twimg.com/media/BhxWutnCEAAtEQ6?format=jpg&name=small",
    publish_date:"03/02/14",
    favorite_count:2200000
},
{
    //https://twitter.com/BTS_twt/status/1167830377508950016
    author: "@BTS_twt",
    description: "행복하게 해주셔서 감사합니다 💜",
    picture:"https://pbs.twimg.com/media/EDT3iASUcAAOnew?format=jpg&name=small",
    publish_date:"08/31/19",
    favorite_count:2000000
},
{
    //https://twitter.com/BarackObama/status/887836712822558720
    author: "@BarackObama",
    description: "John McCain is an American hero & one of the bravest fighters I've ever known. Cancer doesn't know what it's up against. Give it hell, John.",
    picture:"",
    publish_date:"01/20/17",
    favorite_count:2000000
}
,
{
    //https://twitter.com/gibsoncomics/status/1248659669717057537
    author: "@gibsoncomics",
    description: "Just saw that it’s Daisy Ridley’s birthday today, so here’s a study I did recently. Happy Birthday, Daisy!",
    picture:"https://pbs.twimg.com/media/EVQhWWFXQAI7C3G?format=jpg&name=900x900",
    publish_date:"04/10/20",
    favorite_count:2000000
}];
