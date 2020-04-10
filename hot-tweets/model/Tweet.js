class Tweet {

    constructor(author, content, picture, publish_date, favorite_count){
        this.author = author;
        this.description = description;
        this.picture = picture;
        this.publish_date = publish_date;
        this.favorite_count = favorite_count;
    }
    get author(){
        return this.author;
    }
    get description(){
        return this.description;
    }
    get picture(){
        return this.picture;
    }
    get publish_date(){
        return this.publish_date;
    }
    get favorite_count(){
        return this.favorite_count;
    }
    set author(value){
        this.author = value;
    }
}
module.exports = Tweet;