Template['au_wizzard'].rendered = function(){
    var self = this;
    Meteor.subscribe("au-config", function(rdy){
        var status = ConfigCollection.findOne({_id:'status'});
        if(status === undefined){
            //$.fn.wizard.logging = true;
            self.wizard = new AuConfigWizard({});
            self.wizard.wizard.show();
        }
    });
    
}

Template['au_wizzard'].helpers({
    'loginServices' : Accounts.oauth.serviceNames()
});
