AuConfigWizard = function AuConfig(options){
    var self = this;
    this.options = {
        keyboard : false,
        contentHeight : 700,
        contentWidth : 800,
        backdrop: 'static'
    };

    _.extend(this.options, options);

    this.wizard = $("#au-config-wizzard").wizard(this.options);

    this.wizard.on('closed', function() {
        self.wizard.reset();
    });

    this.wizard.on("reset", function() {
        self.wizard.modal.find(':input').val('').removeAttr('disabled');
        self.wizard.modal.find('.form-group').removeClass('has-error').removeClass('has-succes');
    });

    this.wizard.on("submit", function(wizard) {

        var createUserOptions = {
            password: $("#password").val(),
            loginServices : {
                github:{
                    clientId: $("#client-id-github").val(),
                    secretId: $("#secret-id-github").val()
                },
                google : {
                    clientId: $("#client-id-google").val(),
                    secretId: $("#secret-id-google").val()
                },
                facebook : {
                    clientId: $("#client-id-facebook").val(),
                    secretId: $("#secret-id-facebook").val()
                },
                twitter : {
                    clientId: $("#client-id-twitter").val(),
                    secretId: $("#secret-id-twitter").val()
                },
                bitbucket : {
                    clientId: $("#client-id-bitbucket").val(),
                    secretId: $("#secret-id-bitbucket").val()
                }
            }
        }

        Meteor.apply('/au-config/configure', [createUserOptions], function(err, res){
            if(res){
                self.wizard.submitSuccess();
                self.wizard.hideButtons();
                self.wizard.updateProgressBar(100);
            } else {
                self.wizard.submitError();
                self.wizard.hideButtons();
                self.wizard.updateProgressBar(0);
            }
        });
    });

    this.wizard.el.find(".wizard-success .im-done").click(function() {
        self.wizard.hide();
        setTimeout(function() {
            self.wizard.reset(); 
            Router.go('/sign-in');
        }, 250);

    });

    this.wizard.el.find(".wizard-failure, .wizard-error .start-over").click(function() {
        self.wizard.reset(); 
    });
}