Config = function(document){
    _.extend(this, document);
};

Config.prototype = {
    constructor: Config
}

ConfigCollection = new Meteor.Collection("au-config", {
    transform: function(document){
        return new Config(document)
    }
});
