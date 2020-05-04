class Tweet {

    constructor(author, description, picture, publish_date, favorite_count, url){
        this._author = author;
        this._description = description;
        this._picture = picture;
        this._publish_date = new Date(publish_date);
        this._favorite_count = favorite_count;
        this._url = url;
    }
    get author(){
        return this._author;
    }
    get description(){
        return this._description;
    }
    get picture(){
        return this._picture;
    }
    get publish_date(){
        return this._publish_date;
    }
    get favorite_count(){
        return this._favorite_count;
    }
    get url(){
        return this._url;
    }
    set author(value){
        this._author = value;
    }
}
module.exports = Tweet;