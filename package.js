Package.describe({
  summary: "AwareUnit configuration package, that provides UI to configure application",
  name: "steelzz:au-config",
  version: "0.0.2",
  git: "https://github.com/SteelzZ/au-config.git",
  homepage: "https://github.com/SteelzZ/au-config"
});

Package.on_use(function (api, where) {
    // api.imply(['au-cmsinn']);

    api.use([
        'underscore@1.0.0',
        'ui@1.0.0',
        'deps@1.0.0',
        'tracker@1.0.2-rc0',
        'service-configurations@1.0.0',
        'templatings@1.0.0',
        'iron:router@0.9.1',
        'accounts-base@1.0.0',
        'accounts-password@1.0.0',
        'accounts-ui@1.0.0',
        'alanning:roles@1.2.12',
        'accounts-github@1.0.0',
        'accounts-google@1.0.0',
        'accounts-facebook@1.0.0',
        'accounts-twitter@1.0.0',
        'tarang:accounts-bitbucket@0.1.0',
    ], ['client', 'server']);

    api.use(['jquery@1.0.0', 'pfafman:bootstrap-3@3.2.0'], ['client']);

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
