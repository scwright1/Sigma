import Ember from 'ember';

var Facebook = Ember.ObjectController.extend({
    actions: {
        getUser: function(promise) {
            FB.api('/me', function(response) {
                if(!response || response.error) {
                    promise.reject({error: 'Failed to lookup user'});
                } else {
                    promise.resolve(response);
                }
            });
        }
    }
});

export default Facebook;