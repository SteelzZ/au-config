Package.describe({
  summary: "AwareUnit configuration package, that provides UI to config application"
});

Package.on_use(function (api, where) {
    // api.imply(['au-cmsinn']);

    api.use([
        'underscore', 
        'ui', 
        'deps', 
        'service-configuration', 
        'templating', 
        'iron-router', 
        'accounts-base', 
        'accounts-password', 
        'accounts-ui', 
        'roles', 
        'accounts-github',
        'accounts-google',
        'accounts-facebook',
        'accounts-twitter',
        'accounts-bitbucket',
    ], ['client', 'server']);
    api.use(['jquery', 'bootstrap-3'], ['client']);

    api.add_files([
        'lib/3rd/bootstrap-wizard/bootstrap-wizard.css',
        'lib/3rd/bootstrap-wizard/bootstrap-wizard.js',
        'lib/models/config.js',

        'client/css/main.css',
        'client/views/wizard.html',

        'client/views/helpers/wizard.js',
        'client/views/events/wizard.js',

        'lib/au-config-wizard.js',

        'init.js'
    ], ['client']);

    api.add_files([
        'server/api.js',
        'lib/models/config.js',
        'init.js'
    ], ['server']);

    api.export('AuConfigWizard');
    // api.export('Utilities', ['client', 'server'], {testOnly: true});
});

Package.on_test(function (api) {
});
