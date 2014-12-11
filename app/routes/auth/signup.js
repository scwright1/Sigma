import Ember from 'ember';

var Signup = Ember.Route.extend({
    actions: {
        facebookSignup: function() {
            var fbMW = this.get('controller').get('fbMW');
            var user = Ember.RSVP.defer();
            //logic chain: open facebook connect and get the accessToken, then get the userdata based on that token, then resolve the user promise, then save the user data out to the database
            this.get('torii').open('facebook-connect').then(fbMW.send('getUserData', user)).then(function() {
                return user.promise;
            }).then(function(data) {
                //save user out to database
                console.log(data);
            });
        }
    }
});

export default Signup;