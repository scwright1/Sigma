/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'banbury',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    torii: {
      providers: {
        'facebook-oauth2': {
          apiKey: '1604699376417639'
        }
      }
    },
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

    ENV['contentSecurityPolicy'] = {
      "style-src": "'self' 'unsafe-inline' maxcdn.bootstrapcdn.com fonts.googleapis.com",
      "font-src": "'self' 'unsafe-inline' fonts.gstatic.com",
      "frame-src": "'self' static.ak.facebook.com s-static.ak.facebook.com https://www.facebook.com",
      "script-src": "'self' 'unsafe-eval' localhost:35729 0.0.0.0:35729 connect.facebook.net graph.facebook.com cdnjs.cloudflare.com",
      "img-src": "'self' https://www.facebook.com",
      "report-uri": "http://localhost:4200"
    }
    ENV['simple-auth'] = {
      authenticationRoute: 'auth.login'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['simple-auth'] = {
      authenticationRoute: 'auth.login'
    };
  }

  return ENV;
};
