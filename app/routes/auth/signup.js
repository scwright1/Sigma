import Ember from 'ember';

var Signup = Ember.Route.extend({
    actions: {
        facebookSignup: function() {
            //logic chain: open facebook connect and get the accessToken, then get the userdata based on that token, then resolve the user promise, then save the user data out to the database
            var self = this;
            var user = Ember.RSVP.defer();
            var fbMW = this.get('controller').get('fbMW');
            this.get('torii').open('facebook-connect').then(fbMW.send('getUser', user)).then(function() {
                user.promise.then(function(data) {
                    //save the user out to the database if it's a valid user
                    if(!data || data.error) {
                        self.transitionTo('500');
                    } else {
                        //generate user payload
                        var account = self.get('store').createRecord('account', {
                            provider: 'facebook',
                            provider_id: data.id,
                            email: data.email,
                            fname: data.first_name,
                            lname: data.last_name
                        });
                        account.save().then(function(data) {
                            console.log(data);
                        });
                    }
                });
            });
        }
    }
});

export default Signup;