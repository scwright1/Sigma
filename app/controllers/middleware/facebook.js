import Ember from 'ember';

var Facebook = Ember.ObjectController.extend({
    actions: {
        getUserData: function(promise) {
            var api = Ember.RSVP.denodeify(FB.api.bind(FB));
            api('/me').then(function(){}, function(data) {
                if(!data || data.error) {
                    promise.reject('Failed to fetch user');
                } else {
                    promise.resolve(data);
                }
            });
        }
    }
});

export default Facebook;