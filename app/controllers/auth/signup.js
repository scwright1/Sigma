import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

var Signup = Ember.ObjectController.extend(LoginControllerMixin, {
    actions: {
        signupFacebook: function() {
            var _this = this;
            this.get('session').authenticate(
                'simple-auth-authenticator:torii',
                'facebook-oauth2'
            ).then(function() {
                var sessionCode = _this.get('session.authorizationCode');
                Ember.$.ajax({
                    url: '/api/accounts',
                    data: {'token': sessionCode,'provider':'facebook'},
                    type: 'post'
                }).done(function(data) {
                    console.log(data);
                    _this.transitionToRoute('/me');
                });
            }, function(error) {
                alert('ERROR: ' + error);
            });
        }
    }
});

export default Signup;