import Ember from 'ember';
import config from '../../config/environment';

var Signup = Ember.Route.extend({
    actions: {
        facebookSignup: function() {
            this.get('torii').open('facebook-connect').then(function(authorization) {
                console.log(authorization);
            });
        }
    }
});

export default Signup;