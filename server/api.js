Meteor.methods({
    '/au-config/configure' : function(options){
        if(!_.has(options, 'password')){
            return false;
        }

        if(_.isObject(Meteor.settings) && !_.has(Meteor.settings, 'au-accounts') && !_.has(Meteor.settings['au-accounts'], 'user')){
            return false;
        }

        var accountSettings = Meteor.settings['au-accounts']['user'];

        try{
            var userId = Accounts.createUser({
                password: options.password,
                username: accountSettings.username
            });
            Roles.setUserRoles(userId, accountSettings.roles);
        } catch(e){
            if(e.error = 403){
                var user = Meteor.users.findOne({username:accountSettings.username});
                Accounts.setPassword(user._id, options.password);
            } else {
                return false;
            }
        }

        if(_.has(options, 'loginServices')){
            try{
                ServiceConfiguration.configurations.remove({
                    service: {$in:["github", "google", "facebook", "twitter", "bitbucket"]}
                });

                _.each(options.loginServices, function(data, item){
                    if(
                        _.has(data, 'clientId') && _.has(data, 'secretId')
                        &&
                        data.clientId.length > 0 && data.secretId.length > 0
                    ){
                        
                        ServiceConfiguration.configurations.insert({
                            service: item,
                            clientId: data.clientId,
                            secret: data.secretId
                        });
                    }
                });
            } catch(e){
                return false;
            }
        }

        try{
            var id = ConfigCollection.insert({_id:'status'});
            return true;
        } catch(e){
            console.log(e);
            return false;
        }
    }
});