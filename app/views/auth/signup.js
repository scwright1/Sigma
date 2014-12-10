import Ember from 'ember';

var Signup = Ember.View.extend({
    validationFeedback: function() {
        if(this.get('controller.confirm') || this.get('controller.password')) {
            //color the border of the confirm element if the passwords don't match
            if(this.get('controller.confirm') !== this.get('controller.password')) {
                this.$('section > div > section > form > .confirm').addClass('invalid');
            } else {
                this.$('section > div > section > form > .confirm').removeClass('invalid');
            }
        }
    }.observes('controller.password', 'controller.confirm').on('didInsertElement')
});

export default Signup;