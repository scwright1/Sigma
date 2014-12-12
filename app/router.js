import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('auth', function() {
        this.route('login');
        this.route('signup');
    });

    this.route('me');

    this.route('500');
});

export default Router;