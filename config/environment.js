/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'banbury',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['simple-auth'] = {
      authenticationRoute: 'auth.login'
    }
    ENV['contentSecurityPolicy'] = {
      "style-src": "'self' 'unsafe-inline' maxcdn.bootstrapcdn.com fonts.googleapis.com",
      "font-src": "'self' 'unsafe-inline' fonts.gstatic.com"
    }

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:ephemeral'
    };
  }

  if (environment === 'production') {
    ENV['simple-auth'] = {
      authenticationRoute: 'auth.login'
    }
  }

  return ENV;
};
