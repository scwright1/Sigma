import Ember from 'ember';

var Signup = Ember.Route.extend({
    actions: {
        facebookSignup: function() {
            //logic chain: open facebook connect and get the accessToken, then get the userdata based on that token, then resolve the user promise, then save the user data out to the database
            var user = Ember.RSVP.defer();
            var fbMW = this.get('controller').get('fbMW');
            this.get('torii').open('facebook-connect').then(fbMW.send('getUser', user)).then(function() {
                user.promise.then(function(data) {
                    console.log(data);
                });
            });
        }
    }
});

export default Signup;