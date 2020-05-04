var Tweet = require('../model/Tweet');
module.exports.getTweets = function (){
    let items = [];
    for(var i = 0; i < tweets.length; i++){
        var item = new Tweet(
            tweets[i].author,
            tweets[i].description,
            tweets[i].picture,
            tweets[i].publish_date,
            tweets[i].favorite_count
        );
        items.push(item);
    }
    return items;
};
var tweets = [
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
    favorite_count:300000
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
    favorite_count:452
},
{
    //https://twitter.com/BrandonPerna/status/1248719688026054657
    author: "@BrandonPerna",
    description: "In addition to trademarking TOMpa Bay, Tom Brady has filed to trademark VasecTOMy. Men, get a vasecTOMy when you're ready to have just a little less in your balls.",
    picture:"https://pbs.twimg.com/media/EVRX350VAAAT6RX?format=jpg&name=small",
    publish_date:"04/10/20",
    favorite_count:52
},
{
    //https://twitter.com/SuperToughScene/status/1248688942729355264
    author: "@SuperToughScene",
    description: "Sources confirm to ESPN that Donovan Mitchell's desire to get away from Rudy Gobert is 100% legit. Among other issues, Gobert would frequently kiss Mitchell on the lips at random times in the locker room. Many believe this is how Mitchell contracted the COVID-19 virus.",
    picture:"",
    publish_date:"04/10/20",
    favorite_count:7400
},
{
    //https://twitter.com/skillsmcgill/status/1248561512798662656
    author: "@skillsmcgill",
    description: "Could somebody please tell him that whatever I said, whatever I did, I didn’t mean it, I just want him back for good.",
    picture:"https://pbs.twimg.com/media/EVPIEwrU4AA0i-j?format=jpg&name=medium",
    publish_date:"04/10/20",
    favorite_count:31900
}
,
{
    //https://twitter.com/RandallOtisTV/status/1247935679822209027
    author: "@RandallOtisTV",
    description: "The reason Batman doesn’t cover his whole face is because he needs the police to know he’s white",
    picture:"",
    publish_date:"04/08/20",
    favorite_count:498700
},
{
    //https://twitter.com/WellAged_/status/1248096789439361025
    author: "@WellAged_",
    description: "",
    picture:"https://pbs.twimg.com/media/EVIhaUUXsAUwOtM?format=jpg&name=small",
    publish_date:"04/08/20",
    favorite_count:38200
},
{
    //https://twitter.com/haaniyah_/status/1247938531030454273
    author: "@haaniyah_",
    description: "I don’t know about you guys but I’m tired of living through historically significant events",
    picture:"",
    publish_date:"04/07/20",
    favorite_count:305100
},
{
    //https://twitter.com/_johnfarnsworth/status/1247359023327916033
    author: "@_johnfarnsworth",
    description: "as my mental health deteriorates my lmaos get longer lmaoooooo",
    picture:"",
    publish_date:"04/06/20",
    favorite_count:397200
},
{
    //https://twitter.com/rvnstrr/status/1246985799851106304
    author: "@rvnstrr",
    description: "white women being called Karen:",
    picture:"https://pbs.twimg.com/media/EU4u-UEU0AYflsl?format=jpg&name=small",
    publish_date:"04/05/20",
    favorite_count:136100
},
{
    //https://twitter.com/RindsstotheMax/status/1246067684782919680
    author: "@RindsstotheMax",
    description: "wine drunk is the best drunk. makes you horny & intellectual. a lust-filled academia.",
    picture:"",
    publish_date:"04/03/20",
    favorite_count:269300
},
{
    //https://twitter.com/MVD731/status/1246541783149903872
    author: "@MVD731",
    description: "Bruh I love Facebook memes",
    picture:"https://pbs.twimg.com/media/EUybJOkUMAAqnOs?format=jpg&name=small",
    publish_date:"04/04/20",
    favorite_count:3100
},
{
    //https://twitter.com/ericaxhenderson/status/1245843771104931841
    author: "@ericaxhenderson",
    description: "my only 3 quarantine moods",
    picture:"https://pbs.twimg.com/media/EUogTfEXsAcd1Np?format=jpg&name=small",
    publish_date:"04/02/20",
    favorite_count:210500
},
{
    //https://twitter.com/YahBoyJiraiya/status/1245040802209947655
    author: "@YahBoyJiraiya",
    description: "",
    picture:"https://pbs.twimg.com/media/EUdGAqsWkAIVfd1?format=jpg&name=small",
    publish_date:"03/31/20",
    favorite_count:23000
},
{
    //https://twitter.com/Blaise_21/status/1257022773618147328
    author: "@Blaise_21",
    description: "A woman divorces her husband because he’s homophobic! Strength Smiling face with heart-shaped eyesRed heart",
    picture:"https://pbs.twimg.com/media/EXHXi7QXYAA6wH1?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:3900
}
,
{
    //https://twitter.com/isahellya/status/1256364296105271298
    author: "@isahellya",
    description: "what was your favorite multiplication as a child mine was 7x7=49",
    picture:"",
    publish_date:"05/01/20",
    favorite_count:373100
}
,
{
    //https://twitter.com/Anti/status/1256887043654852608
    author: "@Anti",
    description: "Reply with your latest meme",
    picture:"https://pbs.twimg.com/media/EXFcGlFXgAAvCh_?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:1200
}
,
{
    //https://twitter.com/RespectfulMemes/status/1256625694748160002
    author: "@RespectfulMemes",
    description: "",
    picture:"https://pbs.twimg.com/media/EXBuaKZX0Ak748z?format=jpg&name=small",
    publish_date:"05/02/20",
    favorite_count:84700
},
{
    //https://twitter.com/ghoulrunnings/status/1256604762612654082
    author: "@ghoulrunnings",
    description: "what the hell",
    picture:"https://pbs.twimg.com/media/EXBbXhaWkAEF-Hc?format=jpg&name=900x900",
    publish_date:"05/02/20",
    favorite_count:1600
},
{
    //https://twitter.com/SuperMarioFact/status/1256747300019474432
    author: "@SuperMarioFact",
    description: "DK pulls up in his yellow convertible.",
    picture:"https://pbs.twimg.com/media/EW5guWNUwAEok3i?format=png&name=small",
    publish_date:"05/02/20",
    favorite_count:6400
},
{
    //https://twitter.com/slitthroatz/status/1255922054626508800
    author: "@slitthroatz",
    description: "i hate the “watch a movie” suggestion when i say im bored. shut up. i have no attention span. i need to chew on batteries",
    picture:"",
    publish_date:"04/30/20",
    favorite_count:233200
},
{
    //https://twitter.com/justindkim92/status/1255707362981146625
    author: "@justindkim92",
    description: "You are weak, you lack hatred.",
    picture:"https://pbs.twimg.com/media/EW0rMH-U8AAxmKE?format=jpg&name=small",
    publish_date:"04/29/20",
    favorite_count:373800
},
{
    //https://twitter.com/ShitpostBot5000/status/1256531414725603329
    author: "@ShitpostBot5000",
    description: "",
    picture:"https://pbs.twimg.com/media/EXAYqdFXkAAeC44?format=jpg&name=small",
    publish_date:"05/02/20",
    favorite_count:24200
},
{
    //https://twitter.com/SLAMonline/status/1257057344426475525
    author: "@SLAMonline",
    description: "What's the first thought that comes to your mind when you see this photo?",
    picture:"https://pbs.twimg.com/media/EXH2-tpXkAMoVh3?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:1300
},
{
    //https://twitter.com/mrfeelswildride/status/1256754947153997825
    author: "@mrfeelswildride",
    description: "",
    picture:"https://pbs.twimg.com/media/EXDj9iyUEAA1mIW?format=jpg&name=medium",
    publish_date:"05/03/20",
    favorite_count:15800
},
{
    //https://twitter.com/teddyfresh/status/1257066372229718019
    author: "@teddyfresh",
    description: "The ultimate dude @Gusbuckets ladies and gentleman",
    picture:"https://pbs.twimg.com/media/EXH_Mu4XgAANe9x?format=jpg&name=900x900",
    publish_date:"05/03/20",
    favorite_count:820
}
,
{
    //https://twitter.com/towotz/status/1256520664619446274
    author: "@towotz",
    description: "",
    picture:"https://pbs.twimg.com/media/EXAO4j5UcAEQ5CS?format=jpg&name=small",
    publish_date:"05/02/20",
    favorite_count:57600
},
{
    //https://twitter.com/Struggle_Tweet/status/1256675006064373760
    author: "@Struggle_Tweet",
    description: "",
    picture:"https://pbs.twimg.com/media/EXCbQMpUMAIWA5F?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:35600
},
{
    //https://twitter.com/LiquidHbox/status/1257065500372279298
    author: "@LiquidHbox",
    description: "DAMN IT LEO",
    picture:"https://pbs.twimg.com/media/EXH-aETXQAMgncp?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:1000
},
{
    //https://twitter.com/TheYearIs20BC/status/1257041506738864128
    author: "@TheYearIs20BC",
    description: "Zoner mains arguing why their character is worse on WiFi",
    picture:"https://pbs.twimg.com/media/EXHokxeX0AE49GD?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:543
},
{
    //https://twitter.com/moxie2D/status/1257083682499620864
    author: "@moxie2D",
    description: "Smash fashion Samus Who's next?",
    picture:"https://pbs.twimg.com/media/EXGeDhBUEAApiFl?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:1600
},
{
    //https://twitter.com/elonmusk/status/1256855215568875520
    author: "@elonmusk",
    description: "Minecraft has amazing legs",
    picture:"",
    publish_date:"05/03/20",
    favorite_count:197500
},
{
    //https://twitter.com/djoats02/status/1256744174222807042
    author: "@djoats02",
    description: "",
    picture:"https://pbs.twimg.com/media/EXDaKOgXYAUYWty?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:13700
},
{
    //https://twitter.com/ComfortablySmug/status/1257090840746504194
    author: "@ComfortablySmug",
    description: "The Lincoln memorial is nice, but it's time to build the Trump monument",
    picture:"https://pbs.twimg.com/media/EXIVdEQU8AAhSLB?format=jpg&name=small",
    publish_date:"05/03/20",
    favorite_count:800
}];
