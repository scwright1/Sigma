import Ember from 'ember';

var Signup = Ember.ObjectController.extend({
    needs: ['middleware/facebook'],
    fbMW: Ember.computed.alias('controllers.middleware/facebook'),
    model: {},
    actions: {
        signup: function() {
        },
    }
});

export default Signup;