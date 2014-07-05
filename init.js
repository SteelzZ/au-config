if(Meteor.isClient){
    Meteor.startup(function(){
        
    });
}

if(Meteor.isServer){
    Meteor.startup(function(){
        Meteor.publish("au-config", function(){
            return ConfigCollection.find({});
        })
    });
}